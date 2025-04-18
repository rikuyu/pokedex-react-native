import React, { useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import Setting from "@/components/Setting";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import ScrollView = Animated.ScrollView;
import EditButtonSection from "@/components/EditButtonSection";
import BiographySection from "@/components/BiographySection";
import Residence from "@/components/Residence";
import Birthday from "@/components/Birthday";
import { useMyProfile } from "@/hooks/useMyProfile";

export default function MyPage() {
  const router = useRouter();

  const headerRight = useCallback(() => {
    return <Setting onPress={() => router.push("/setting")}/>;
  }, []);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const {profile, loading, error, loadProfile} = useMyProfile();

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, []),
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MyPageHeader
        imageSize={imageSize}
        scrollOffset={scrollY}
        positionStyle={styles.headerPosition}
      />
      <ScrollView
        style={styles.listContainer}
        onScroll={scrollHandler}
      >
        <EditButtonSection
          onPress={() => router.push("/edit")}
          height={imageSize / 2}
        />
        <BiographySection profile={profile}/>
        <Residence/>
        <View style={{height: 8}}/>
        <Birthday/>
        <View style={{height: 24}}/>
        {Array.from({length: 10}).map((_, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: COLORS[index % 4],
                width: "100%",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text style={{fontSize: 24}}>{index}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const COLORS = [
  "#ff9396",
  "#8bb7ff",
  "#fbe87f",
  "#9bff89",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  headerPosition: {
    zIndex: 2,
  },
  listContainer: {
    zIndex: 1,
    width: "100%",
    backgroundColor: "#000000",
  },
});
