import React, { useEffect } from "react";
import { View } from "tamagui";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function FullScreenLoadingIndicator() {
  const duration = 2000;
  const easing = Easing.bezier(0.25, -0.5, 0.25, 1);
  const sharedValue = useSharedValue<number>(0);

  useEffect(() => {
    sharedValue.value = withDelay(300, withRepeat(withTiming(1, {duration, easing}), -1));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sharedValue.value * 360}deg`}],
  }));

  return (
    <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <Animated.Image
        source={require("../assets/images/monster_ball_big.png")}
        style={[animatedStyle, {width: 120, height: 120}]}
      />
    </View>
  );
};
