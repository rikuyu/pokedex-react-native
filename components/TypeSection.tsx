import React from "react";
import { PokemonType } from "@/types/pokemon";
import { StyleSheet } from "react-native";
import TypeChip from "@/components/TypeChip";
import { ThemedView } from "@/components/ThemedView";

export default function TypeSection({types}: { types: PokemonType[] | undefined }) {
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
