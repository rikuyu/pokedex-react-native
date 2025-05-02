import React from "react";
import { StyleSheet } from "react-native";
import PhysicalDataCard from "@/components/PhysicalDataCard";
import { ThemedView } from "@/components/ThemedView";
import { pokedexRed } from "@/constants/colors";

type Props = {
  height: number | undefined
  weight: number | undefined
}

export default function PhysicalSection({height, weight}: Props) {
  return (
    <ThemedView lightColor={pokedexRed} darkColor={pokedexRed} style={styles.container}>
      <PhysicalDataCard label={"たかさ"} value={height || 0}/>
      <ThemedView style={{width: 12}}/>
      <PhysicalDataCard label={"おもさ"} value={weight || 0}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
