import React from "react";
import { LinearGradient } from "@tamagui/linear-gradient";
import { View } from "tamagui";
import { TypeColor } from "@/utils/typeData";

type Props = {
  colors: TypeColor[] | undefined;
  children: React.ReactElement | React.ReactElement[];
}

export default function GradientOrSolidBackground({colors, children}: Props) {
  const safeColors: TypeColor[] = colors?.length ? colors : ["#ffffff"];

  if (safeColors.length >= 2) {
    const gradientColors = safeColors as [string, string, ...string[]];
    return (
      <LinearGradient colors={gradientColors} f={1.25} w={"100%"} jc={"center"} ai={"center"} bblr={40} bbrr={40}>
        {children}
      </LinearGradient>
    );
  } else {
    return (
      <View bg={safeColors[0]} f={1.25} w={"100%"} jc={"center"} ai={"center"} bblr={40} bbrr={40}>
        {children}
      </View>
    );
  }
}
