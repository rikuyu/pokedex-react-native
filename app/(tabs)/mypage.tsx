import React, { useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import EditButtonSection from "@/components/EditButtonSection";
import BiographySection from "@/components/BiographySection";
import Residence from "@/components/Residence";
import Birthday from "@/components/Birthday";
import { useMyProfile } from "@/hooks/useMyProfile";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ScrollView = Animated.ScrollView;
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyPage() {
  const router = useRouter();

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
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large"/>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.container}>
        <Text>Error</Text>
      </ThemedView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}} edges={["top"]}>
      <ThemedView style={styles.container}>
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
          <ThemedView style={{height: 8}}/>
          <Birthday/>
          <ThemedView style={{height: 24}}/>
          {Array.from({length: 10}).map((_, index) => {
            return (
              <ThemedView
                key={index}
                style={{
                  width: "100%",
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ff7300",
                }}>
                <ThemedText style={{fontSize: 24}}>{index}</ThemedText>
              </ThemedView>
            );
          })}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
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
    backgroundColor: "#ff7300",
  },
});
