import React from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { PokemonBookmark } from "@/types/pokemon";
import Svg, { Path } from "react-native-svg";
import BookmarkPokemonImage from "@/components/BookmarkPokemonImage";
import GenderAndTypes from "@/components/GenderAndTypes";
import HpBar from "@/components/HpBar";
import { bookmarkBlue } from "@/constants/colors";

type Props = {
  pokemon: PokemonBookmark;
  onPress: () => void;
}

export default function BookmarkPokemon({pokemon, onPress}: Props) {
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
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width: itemWidth, height: itemHeight}]}>
      <Svg
        width="100%"
        height="100%"
        viewBox={canvas}
        style={StyleSheet.absoluteFill}
      >
        <Path d={direction} fill={bookmarkBlue}/>
      </Svg>
      <View style={[styles.rowContent, {padding: 8}]}>
        <BookmarkPokemonImage pokemonId={pokemon.id} itemSize={itemHeight - 16}/>
        <View style={{width: 6}}/>
        <View style={styles.attr}>
          <Text style={styles.label}>{pokemon.name}</Text>
          <View style={{height: 8}}/>
          <HpBar />
          <View style={{height: 8}}/>
          <GenderAndTypes typeFirst={pokemon.typeFirst} typeSecond={pokemon.typeSecond}/>
        </View>
      </View>
    </TouchableOpacity>
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
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
