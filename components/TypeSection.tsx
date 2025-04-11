import React from "react";
import { PokemonType } from "@/types/pokemon";
import { StyleSheet, View } from "react-native";
import TypeChip from "@/components/TypeChip";

type Props = {
  types: PokemonType[] | undefined;
}

export default function TypeSection({types}: Props) {
  const safeTypes = types ?? [];
  return (
    <View style={styles.container}>
      {
        safeTypes?.flatMap((type, index) => [
          <TypeChip key={`chip-${index}`} name={type.name} color={type.color}/>,
          index !== safeTypes.length - 1 && (
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
