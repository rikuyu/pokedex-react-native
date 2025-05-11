import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { isJa } from "@/utils/i18n";

type Props = {
  label: "h" | "w";
  value: number;
}

export default function PhysicalDataCard({label, value}: Props) {
  return (
    <ThemedView style={styles.card}>
      <ThemedText type={"size16Bold"}>
        {isJa
          ? label === "h" ? "たかさ" : "おもさ"
          : label === "h" ? "Height" : "Weight"}
      </ThemedText>
      <ThemedView style={{height: 8}}/>
      <ThemedText type={"size16Medium"}>{`${value}${label === "h" ? "m" : "kg"}`}</ThemedText>
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
