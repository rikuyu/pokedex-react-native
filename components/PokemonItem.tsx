import React from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { getPokemonImage } from "@/api/endpoints";
import { PokemonListItem } from "@/types/pokemon";

export default function PokemonItem({index, name}: PokemonListItem) {
  const {width} = useWindowDimensions();
  const padding = 8;
  const itemSize = (width - padding * 4) / 3;
  const imageSize = itemSize / 2;

  return (
    <View style={[styles.container, {width: itemSize, height: itemSize}]}>
      <View style={styles.background}>
        <View style={styles.topHalf}/>
        <View style={styles.bottomHalf}/>
      </View>

      <View style={styles.content}>
        <Text style={styles.index}>#{index}</Text>
        <Image source={{uri: getPokemonImage(index)}} style={{height: imageSize, width: imageSize}}/>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "black",
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
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  index: {
    color: "white",
    fontWeight: "800",
    fontSize: 12,
  },
  name: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
  },
});
