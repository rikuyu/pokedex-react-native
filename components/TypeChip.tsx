import React from "react";
import { StyleSheet } from "react-native";
import { getColorIsLight } from "@/utils/getColorIsLight";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  name: string;
  color: string;
}

export default function TypeChip({name, color}: Props) {
  const labelColor = getColorIsLight(color) ? "black" : "white";
  return (
    <ThemedView style={styles.chip} lightColor={color} darkColor={color}>
      <ThemedText type="size16Bold" lightColor={labelColor} darkColor={labelColor}>
        {name}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: 90,
    height: 32,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
