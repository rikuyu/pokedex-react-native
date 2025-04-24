import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { getPokemonDotImage } from "@/constants/endpoints";
import ItemBadge from "@/components/ItemBadge";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  pokemonId: number;
  itemSize: number;
}

export default function BookmarkPokemonImage({pokemonId, itemSize}: Props) {
  const imageSize = itemSize - 12;
  const borderColor = useThemeColor(undefined, "text");
  return (
    <View style={[styles.container, {width: itemSize, aspectRatio: 1, borderColor}]}>
      <View style={styles.background}>
        <View style={styles.topHalf}/>
        <ThemedView style={styles.bottomHalf}/>
      </View>
      <Image
        source={{uri: getPokemonDotImage(pokemonId)}}
        style={{height: imageSize, aspectRatio: 1}}
      />
      {Math.random() > 0.4 && <ItemBadge style={styles.bottomRightOverlay}/>}
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
    borderWidth: 1,
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
  },
  bottomRightOverlay: {
    position: "absolute",
    bottom: 12,
    right: 16,
  },
});
