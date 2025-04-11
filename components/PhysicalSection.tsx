import React from "react";
import { StyleSheet, View } from "react-native";
import PhysicalDataCard from "@/components/PhysicalDataCard";

type Props = {
  height: number,
  weight: number,
}

export default function PhysicalSection({height, weight}: Props) {
  return (
    <View style={styles.container}>
      <PhysicalDataCard label={"たかさ"} value={height}/>
      <View style={{width: 12}}/>
      <PhysicalDataCard label={"おもさ"} value={weight}/>
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
