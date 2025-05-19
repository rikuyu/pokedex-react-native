import React from "react";
import { getPokemonDotImage } from "@/constants/endpoints";
import ItemBadge from "@/components/ItemBadge";
import { Image, View, YStack, ZStack } from "tamagui";

type Props = {
  pokemonId: number;
  itemSize: number;
}

export default function BookmarkPokemonImage({pokemonId, itemSize}: Props) {
  const imageSize = itemSize - 12;
  return (
    <ZStack w={itemSize} ar={1} boc={"$color"} br={50} bw={1} ov={"hidden"}>
      <YStack f={1}>
        <View f={1} bg={"$pokedexRed"}/>
        <View f={1}/>
      </YStack>
      <View f={1} jc={"center"} ai={"center"}>
        <Image h={imageSize} ar={1} source={{uri: getPokemonDotImage(pokemonId)}}/>
      </View>
      {Math.random() > 0.4 && <ItemBadge/>}
    </ZStack>
  );
}
