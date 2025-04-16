import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  scrollOffset: SharedValue<number>;
}

export default function MyPageHeader({scrollOffset}: Props) {

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
    <Animated.View style={[animatedHeaderStyle]}>

    </Animated.View>
  );
}
