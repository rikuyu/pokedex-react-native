import React from "react";
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  colors: string[] | undefined;
  children: React.ReactElement | React.ReactElement[];
}

export default function GradientOrSolidBackground({colors, children}: Props) {
  const fallbackColor = useThemeColor(undefined, "background");
  const safeColors = colors?.length ? colors : [fallbackColor];

  if (safeColors.length >= 2) {
    const gradientColors = safeColors as [string, string, ...string[]];
    return (
      <LinearGradient
        colors={gradientColors}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    );
  } else {
    return (
      <View
        style={[
          styles.linearGradient,
          {
            width: "100%",
            backgroundColor: safeColors[0],
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
    flex: 1.25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
});
