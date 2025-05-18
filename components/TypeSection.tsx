import React from "react";
import { PokemonType } from "@/types/pokemon";
import TypeChip from "@/components/TypeChip";
import { View } from "tamagui";

export default function TypeSection({types}: { types: PokemonType[] | undefined }) {
  const safeTypes = types ?? [];
  return (
    <View fd={"row"} jc={"center"} ai={"center"} bg={"$background"} br={24} px={10} py={8}>
      {safeTypes?.flatMap((type, index) => [
        <TypeChip key={`chip-${index}`} name={type.name} color={type.color}/>,
        index !== safeTypes.length - 1 && <View key={`spacer-${index}`} w={10}/>,
      ])}
    </View>
  );
}
