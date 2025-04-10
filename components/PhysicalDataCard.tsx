import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: "たかさ" | "おもさ";
  value: number;
}

export default function PhysicalDataCard({label, value}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <View style={{height: 8}}/>
      <Text style={styles.value}>{`${value}${label === "たかさ" ? "m" : "kg"}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 76,
    width: 76,
    borderRadius: 12,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
  },
});
