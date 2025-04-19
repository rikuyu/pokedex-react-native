import React from "react";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { LinearGradient } from "expo-linear-gradient";

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
      [160, 70],
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
      Extrapolation.CLAMP
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
        source={require("../assets/images/pokedex_header.png")}
        style={[styles.headerImage, animatedHeaderStyle]}
        resizeMode="cover"
      />
      <GradientBlur animStyle={animatedBlurStyle}/>
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

const GradientBlur = ({animStyle}: { animStyle: ViewStyle }) => {
  return (
    <Animated.View style={[styles.headerImageBlur, animStyle]}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]}
        style={[styles.headerImageBlur]}
      />
    </Animated.View>
  );
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
    borderColor: "#000"
  },
});
