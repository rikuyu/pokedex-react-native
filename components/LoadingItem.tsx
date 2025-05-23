import React, { useEffect } from "react";
import { View } from "tamagui";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function LoadingItem() {
  const duration = 800;
  const easing = Easing.linear;
  const angle = useSharedValue<number>(0);

  useEffect(() => {
    angle.value = withRepeat(withTiming(1, {duration, easing}), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${angle.value * 360}deg`}],
  }));

  return (
    <View ai={"center"} jc={"center"} bg={"$background"} my={8}>
      <Animated.Image
        source={require("../assets/images/monster_ball_big.png")}
        style={[animatedStyle, {width: 28, height: 28}]}
      />
    </View>
  );
};
