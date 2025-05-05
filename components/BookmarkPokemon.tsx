import React from "react";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { PokemonBookmark } from "@/types/pokemon";
import Svg, { Path } from "react-native-svg";
import BookmarkPokemonImage from "@/components/BookmarkPokemonImage";
import GenderAndTypes from "@/components/GenderAndTypes";
import HpBar from "@/components/HpBar";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

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
    <Pressable
      onPress={onPress}
      style={[styles.container, {width: itemWidth, height: itemHeight}]}>
      <Svg
        width="100%"
        height="100%"
        fill={svgFillColor}
        viewBox={canvas}
        style={StyleSheet.absoluteFill}
      >
        <Path
          d={direction}
          stroke={borderColor}
          strokeWidth={1}
        />
      </Svg>
      <View style={[styles.rowContent, {padding: 8}]}>
        <BookmarkPokemonImage pokemonId={pokemon.id} itemSize={itemHeight - 16}/>
        <ThemedView style={{width: 6}}/>
        <ThemedView style={styles.attr}>
          <ThemedText type="size14Medium">{pokemon.name}</ThemedText>
          <ThemedView style={{height: 8}}/>
          <HpBar/>
          <ThemedView style={{height: 8}}/>
          <GenderAndTypes typeFirst={pokemon.typeFirst} typeSecond={pokemon.typeSecond}/>
        </ThemedView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
  },
  rowContent: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  attr: {
    flex: 1,
    flexDirection: "column",
  },
});
