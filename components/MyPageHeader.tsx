import React from "react";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { ImageStyle, StyleSheet, useWindowDimensions, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  positionStyle: ViewStyle;
  scrollOffset: SharedValue<number>;
}

export default function MyPageHeader({positionStyle, scrollOffset}: Props) {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollOffset.value,
      [0, 160],
      [160, 50],
      Extrapolation.CLAMP,
    ),
  }));

  const animatedProfileImageStyle = useAnimatedStyle(() => {
    const size = interpolate(
      scrollOffset.value,
      [0, 160],
      [imageSize, imageSize * 2 / 3],
      Extrapolation.CLAMP,
    );
    const radius = size / 2;
    const bottom = -1 * size / 2;

    return {
      width: size,
      height: size,
      borderRadius: radius,
      bottom,
    };
  });

  return (
    <Animated.View style={[styles.headerContainer, positionStyle, animatedHeaderStyle]}>
      <Animated.Image
        source={require("../assets/images/pokedex_header.png")}
        style={[styles.headerImage, animatedHeaderStyle]}
        resizeMode="cover"
      />
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

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    position: "relative",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
  imagePosition: {
    position: "absolute",
    left: 20,
  },
});
