import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  colors: string[];
  children: React.ReactElement | React.ReactElement[];
}

export default function GradientOrSolidBackground({colors, children}: Props) {
  if (colors.length >= 2) {
    const safeColors = colors as [string, string, ...string[]];
    return (
      <LinearGradient
        colors={safeColors}
        style={[styles.linearGradient, {width: "100%"}]}
      >
        {children}
      </LinearGradient>
    );
  } else {
    const solidColor = colors[0] ?? "#ffffff";
    return (
      <View
        style={[
          styles.linearGradient,
          {
            width: "100%",
            backgroundColor: solidColor,
          },
        ]}
      >
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
});
