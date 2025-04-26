import React from "react";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  imageSize: number;
  positionStyle: ViewStyle;
  scrollOffset: SharedValue<number>;
}

export default function MyPageHeader({imageSize, positionStyle, scrollOffset}: Props) {
  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollOffset.value,
      [0, 180],
      [160, 52],
      Extrapolation.CLAMP,
    ),
  }));

  const animatedProfileImageStyle = useAnimatedStyle(() => {
    const size = interpolate(
      scrollOffset.value,
      [0, 160],
      [imageSize, 0],
      Extrapolation.CLAMP,
    );
    const radius = size / 2;
    const bottom = -1 * size / 2;

    const borderWidth = interpolate(
      scrollOffset.value,
      [0, 160],
      [2, 0],
      Extrapolation.CLAMP,
    );

    return {
      width: size,
      height: size,
      borderRadius: radius,
      bottom,
      borderWidth,
    };
  });

  const animatedBlurStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollOffset.value,
      [0, 160],
      [0, 0.8],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <Animated.View style={[styles.headerContainer, positionStyle, animatedHeaderStyle]}>
      <Animated.Image
        source={require("../assets/images/header_placeholder.png")}
        style={[styles.headerImage, animatedHeaderStyle]}
        resizeMode="cover"
      />
      <Blur animStyle={animatedBlurStyle}/>
      <Animated.Image
        source={require("../assets/images/profile_image.png")}
        resizeMode="cover"
        style={[
          styles.imagePosition,
          animatedProfileImageStyle,
        ]}
      />
    </Animated.View>
  );
}

const Blur = ({animStyle}: { animStyle: ViewStyle }) => {
  return <Animated.View style={[styles.headerImageBlur, animStyle]}/>;
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    position: "relative",
  },
  headerImageBlur: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
  imagePosition: {
    position: "absolute",
    left: 16,
    borderColor: "#000",
  },
});
