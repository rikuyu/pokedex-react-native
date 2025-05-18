import React from "react";
import { useWindowDimensions } from "react-native";
import { getPokemonDotImage } from "@/constants/endpoints";
import { PokemonListItem } from "@/types/pokemon";
import { isJa } from "@/utils/i18n";
import { pokemonData } from "@/utils/pokemonData";
import { Image, Text, View, YStack, ZStack } from "tamagui";

type Props = PokemonListItem & {
  onPress: () => void;
};

export default function PokemonItem({index, name, onPress}: Props) {
  const {width} = useWindowDimensions();
  const padding = 8;
  const itemSize = (width - padding * 4) / 3;
  const imageSize = itemSize / 1.5;

  return (
    <ZStack onPress={onPress} boc={"$color"} w={itemSize} h={itemSize} br={12} ov={"hidden"} bw={0.5} testID={`pokemon-${index}`}>
      <YStack f={1}>
        <View f={1} bg={"$pokedexRed"}/>
        <View f={1}/>
      </YStack>

      <YStack f={1} ai={"center"} jc={"center"}>
        <Text fos={12} fow={"bold"} col={"white"}>No.{index}</Text>
        <Image source={{uri: getPokemonDotImage(index)}} h={imageSize} w={imageSize}/>
        <Text fos={12} fow={"bold"}>{isJa ? pokemonData.get(name) : name}</Text>
      </YStack>
    </ZStack>
  );
}
