import React from "react";
import { StyleSheet, View } from "react-native";
import PhysicalDataCard from "@/components/PhysicalDataCard";

type Props = {
  height: number | undefined
  weight: number | undefined
}

export default function PhysicalSection({height, weight}: Props) {
  return (
    <View style={styles.container}>
      <PhysicalDataCard label={"たかさ"} value={height || 0}/>
      <View style={{width: 12}}/>
      <PhysicalDataCard label={"おもさ"} value={weight || 0}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
