import React from "react";
import { getPokemonDotImage } from "@/constants/endpoints";
import ItemBadge from "@/components/ItemBadge";
import { Image, View, YStack } from "tamagui";

type Props = {
  pokemonId: number;
  itemSize: number;
}

export default function BookmarkPokemonImage({pokemonId, itemSize}: Props) {
  const imageSize = itemSize - 12;
  return (
    <View w={itemSize} ar={1} boc={"$color"} br={50} bw={1} ov={"hidden"} pos={"relative"} jc={"center"} ai={"center"} >
      <YStack pos={"absolute"} t={0} l={0} r={0} b={0}>
        <View f={1} bg={"$pokedexRed"}/>
        <View f={1}/>
      </YStack>
      <Image h={imageSize} ar={1} source={{uri: getPokemonDotImage(pokemonId)}}/>
      {Math.random() > 0.4 && <ItemBadge />}
    </View>
  );
}
