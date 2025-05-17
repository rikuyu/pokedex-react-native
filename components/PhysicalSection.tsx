import React from "react";
import PhysicalCard from "@/components/PhysicalCard";
import { View, XStack } from "tamagui";

type Props = {
  height: number | undefined
  weight: number | undefined
}

export default function PhysicalSection({height, weight}: Props) {
  return (
    <XStack bc={"$pokedexRed"} jc={"center"} ai={"center"}>
      <PhysicalCard label={"h"} value={height || 0}/>
      <View w={12}/>
      <PhysicalCard label={"w"} value={weight || 0}/>
    </XStack>
  );
}
