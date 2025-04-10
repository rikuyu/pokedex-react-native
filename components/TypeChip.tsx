import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getColorIsLight } from "@/utils/getColorIsLight";

type Props = {
  name: string;
  color: string;
}

export default function TypeChip({name, color}: Props) {
  const labelColor = getColorIsLight(color) ? "black" : "white";
  console.log(name, color);
  return (
    <View style={[styles.chip, {backgroundColor: `#${color}`}]}>
      <Text style={[styles.name, {color: labelColor}]}>{name}</Text>
    </View>
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
  name: {
    fontSize: 16,
    fontWeight: "500",
  }
});
