import React, { useCallback } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";
import Setting from "@/components/Setting";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import ScrollView = Animated.ScrollView;
import EditButtonSection from "@/components/EditButtonSection";
import BiographySection from "@/components/BiographySection";
import Residence from "@/components/Residence";
import Birthday from "@/components/Birthday";

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
        <BiographySection/>
        <Residence/>
        <View style={{height: 12, backgroundColor: "#000"}}/>
        <Birthday/>
        <View style={{height: 24, backgroundColor: "#000"}}/>
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
  },
  headerPosition: {
    zIndex: 2,
  },
  listContainer: {
    zIndex: 1,
    width: "100%",
    backgroundColor: "#656565",
  },
});
