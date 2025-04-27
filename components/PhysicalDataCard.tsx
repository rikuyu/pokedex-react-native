import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  label: "たかさ" | "おもさ";
  value: number;
}

export default function PhysicalDataCard({label, value}: Props) {
  return (
    <ThemedView style={styles.card}>
      <ThemedText type={"size16Bold"}>{label}</ThemedText>
      <ThemedView style={{height: 8}}/>
      <ThemedText type={"size16Medium"}>{`${value}${label === "たかさ" ? "m" : "kg"}`}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 76,
    width: 76,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
