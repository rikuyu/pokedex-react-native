import React from "react";
import { isJa } from "@/utils/i18n";
import { pokemonData } from "@/utils/pokemonData";
import { Image, Text, View, XStack } from "tamagui";

export default function PokemonProfileTitle({title}: { title: string | undefined }) {
  const safeTitle = title ?? "unknown";
  return (
    <XStack bg={"$background"} ac={"center"} jc={"center"} br={50} py={8} px={12} als={"center"}>
      <MonsterBall/>
      <View w={12}/>
      {/* style={{fontFamily: "PKMN-REGULAR"}} */}
      <Text fos={20} fow={"bold"}>
        {isJa ? pokemonData.get(safeTitle) : safeTitle}
      </Text>
      <View w={12}/>
      <MonsterBall/>
    </XStack>
  );
}

function MonsterBall() {
  return (
    <Image w={24} h={24} source={require("../assets/images/monster_ball.png")}/>
  );
}
