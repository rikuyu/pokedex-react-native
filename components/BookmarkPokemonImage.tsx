import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getPokemonDotImage } from "@/api/endpoints";

type Props = {
  pokemonId: number;
  itemSize: number;
}

export default function BookmarkPokemonImage({pokemonId, itemSize}: Props) {
  const imageSize = itemSize - 12;
  return (
    <View style={[styles.container, {width: itemSize, aspectRatio: 1}]}>
      <View style={styles.background}>
        <View style={styles.topHalf}/>
        <View style={styles.bottomHalf}/>
      </View>
      <Image
        source={{uri: getPokemonDotImage(pokemonId)}}
        style={{height: imageSize, aspectRatio: 1}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "column",
  },
  topHalf: {
    flex: 1,
    backgroundColor: "red",
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: "white",
  },
});
