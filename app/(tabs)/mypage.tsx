import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import Setting from "@/components/Setting";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function MyPage() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({headerRight: headerRight});
  }, [navigation]);

  const headerRight = useCallback(() => {
    return <Setting onPress={() => router.push("/setting")}/>;
  }, []);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, 200],
      [200, 40],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          animatedHeaderStyle,
        ]}/>
      <Animated.ScrollView
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
      </Animated.ScrollView>
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
  header: {
    width: "100%",
    backgroundColor: "#b78bff",
  },
  list: {
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
