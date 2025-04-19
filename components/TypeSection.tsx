import React from "react";
import { PokemonType } from "@/types/pokemon";
import { StyleSheet, View } from "react-native";
import TypeChip from "@/components/TypeChip";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  types: PokemonType[] | undefined;
}

export default function TypeSection({types}: Props) {
  const safeTypes = types ?? [];
  return (
    <ThemedView style={styles.container}>
      {
        safeTypes?.flatMap((type, index) => [
          <TypeChip key={`chip-${index}`} name={type.name} color={type.color}/>,
          index !== safeTypes.length - 1 && (
            <ThemedView key={`spacer-${index}`} style={{width: 10}}/>
          ),
        ])
      }
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
