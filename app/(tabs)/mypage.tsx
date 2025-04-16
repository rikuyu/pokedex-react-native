import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Setting from "@/components/Setting";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import ScrollView = Animated.ScrollView;

export default function MyPage() {
  const router = useRouter();

  const headerRight = useCallback(() => {
    return <Setting onPress={() => router.push("/setting")}/>;
  }, []);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <MyPageHeader
        scrollOffset={scrollY}
        positionStyle={styles.headerPosition}
      />
      <ScrollView
        style={styles.list}
        onScroll={scrollHandler}
      >
        {Array.from({length: 10}).map((_, index) => {
          return (
            <View key={index} style={[styles.item, {backgroundColor: COLORS[index % 4]}]}>
              <Text style={styles.text}>{index}</Text>
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
  list: {
    zIndex: 1,
    width: "100%",
    backgroundColor: "#656565",
  },
  item: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
