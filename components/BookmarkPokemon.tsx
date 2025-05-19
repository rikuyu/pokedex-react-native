import React from "react";
import { useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import BookmarkPokemonImage from "@/components/BookmarkPokemonImage";
import GenderAndTypes from "@/components/GenderAndTypes";
import HpBar from "@/components/HpBar";
import { useThemeColor } from "@/hooks/useThemeColor";
import { PokemonBookmark } from "@/services/db";
import { Text, View, XStack, YStack, ZStack } from "tamagui";
import { isJa } from "@/utils/i18n";
import { pokemonData } from "@/utils/pokemonData";

type Props = {
  pokemon: PokemonBookmark;
  onPress: () => void;
}

export default function BookmarkPokemon({pokemon, onPress}: Props) {
  const borderColor = useThemeColor(undefined, "text");
  const svgFillColor = useThemeColor(undefined, "background");
  const {width: screenWidth} = useWindowDimensions();
  const itemWidth = (screenWidth - 8 * 3) / 2;
  const itemHeight = itemWidth / 2;
  const canvas = `0 0 ${itemWidth} ${itemHeight}`;
  const cutSize = 20;
  const direction = `
  M0,0
  L${itemWidth},0
  L${itemWidth},${itemHeight - cutSize}
  L${itemWidth - cutSize},${itemHeight}
  L0,${itemHeight}
  Z
    `;

  return (
    <ZStack onPress={onPress} w={itemWidth} h={itemHeight} ai={"flex-start"} jc={"center"} testID={`bookmark-pokemon-${pokemon.id}`}>
      <Svg width="100%" height="100%" fill={svgFillColor} viewBox={canvas}>
        <Path d={direction} stroke={borderColor} strokeWidth={1}/>
      </Svg>
      <XStack ai={"center"} jc={"flex-start"} p={8}>
        <BookmarkPokemonImage pokemonId={pokemon.id} itemSize={itemHeight - 16}/>
        <View w={6}/>
        <YStack f={1}>
          <Text fos={14} fow={"500"}>{isJa ? pokemonData.get(pokemon.name) : pokemon.name}</Text>
          <View h={8}/>
          <HpBar/>
          <View h={8}/>
          <GenderAndTypes typeFirst={pokemon.type_first} typeSecond={pokemon.type_second}/>
        </YStack>
      </XStack>
    </ZStack>
  );
}
