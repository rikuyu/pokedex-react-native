import React, { useCallback } from "react";
import { ActivityIndicator, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import EditButtonSection from "@/components/EditButtonSection";
import BiographySection from "@/components/BiographySection";
import Residence from "@/components/Residence";
import Birthday from "@/components/Birthday";
import { useMyProfile } from "@/hooks/useMyProfile";
import { ThemedView } from "@/components/ThemedView";
import PokemonToolItem from "@/components/PokemonToolItem";
import { BerryData } from "@/types/berry";
import { fetchBerryList } from "@/services/fetchBerryList";
import { useThemeColor } from "@/hooks/useThemeColor";
import { darkTextColor, lightTextColor } from "@/constants/colors";
import { ThemedText } from "@/components/ThemedText";
import { Profile } from "@/services/profileStorage";
import { useQuery } from "@tanstack/react-query";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<BerryData>);

export default function MyPage() {
  const borderColor = useThemeColor({light: lightTextColor, dark: darkTextColor});
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const {profile, loading: l1, error: e1, loadProfile} = useMyProfile();

  useFocusEffect(
    useCallback(() => {
      void loadProfile();
    }, [loadProfile]),
  );

  const {data: berryList, isLoading: l2, isError: e2} = useQuery({
    queryKey: ["berry_list"],
    queryFn: fetchBerryList,
  });

  if (l1 || l2) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large"/>
      </ThemedView>
    );
  }

  if (e1 || e2) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Error</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <MyPageHeader
        imageSize={imageSize}
        scrollOffset={scrollY}
        positionStyle={styles.headerPosition}
      />
      <AnimatedFlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ListHeaderComponent={<ProfileSection profile={profile} imageSize={imageSize}/>}
        ItemSeparatorComponent={() => <ThemedView style={{height: 1, flex: 1, backgroundColor: borderColor}}/>}
        data={berryList}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <PokemonToolItem berry={item}/>}
        style={styles.listContainer}
      />
    </ThemedView>
  );
};

type Props = {
  imageSize: number;
  profile: Profile;
}

const ProfileSection = React.memo(({imageSize, profile}: Props) => {
  const borderColor = useThemeColor({light: lightTextColor, dark: darkTextColor});
  const router = useRouter();

  return (
    <>
      <EditButtonSection
        onPress={() => router.push("/edit")}
        height={imageSize / 2}
      />
      <BiographySection profile={profile}/>
      <Residence/>
      <ThemedView style={{height: 8}}/>
      <Birthday/>
      <ThemedView style={{height: 16}}/>
      <ThemedView style={{flex: 1, height: 1, backgroundColor: borderColor}}/>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerPosition: {
    zIndex: 2,
  },
  listContainer: {
    zIndex: 1,
    width: "100%",
  },
});
