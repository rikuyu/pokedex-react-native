import React from "react";
import { PokemonType } from "@/types/pokemon";
import { StyleSheet, View } from "react-native";
import TypeChip from "@/components/TypeChip";

type Props = {
  types: PokemonType[];
}

export default function TypeSection({types}: Props) {
  return (
    <View style={styles.container}>
      {
        types?.flatMap((type, index) => [
          <TypeChip key={`chip-${index}`} name={type.name} color={type.color}/>,
          index !== types.length - 1 && (
            <View key={`spacer-${index}`} style={{width: 10}}/>
          ),
        ])
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#edf3fc",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
