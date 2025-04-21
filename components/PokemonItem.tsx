import React from "react";
import { Image, Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { getPokemonDotImage } from "@/constants/endpoints";
import { PokemonListItem } from "@/types/pokemon";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { darkBackground, lightBackground } from "@/constants/colors";

type Props = PokemonListItem & {
  onPress: () => void;
};

export default function PokemonItem({index, name, onPress}: Props) {
  const {width} = useWindowDimensions();
  const padding = 8;
  const itemSize = (width - padding * 4) / 3;
  const imageSize = itemSize / 1.5;

  const borderColor = useThemeColor({light: darkBackground, dark: lightBackground})

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, {width: itemSize, height: itemSize, borderColor}]}>
        <View style={styles.background}>
          <View style={styles.topHalf}/>
          <ThemedView darkColor={"#333333"} style={styles.bottomHalf}/>
        </View>

        <View style={styles.content}>
          <Text style={styles.index}>No.{index}</Text>
          <Image source={{uri: getPokemonDotImage(index)}} style={{height: imageSize, width: imageSize}}/>
          <ThemedText
            type={"size12Bold"}
            style={{fontFamily: Platform.OS === "ios" ? "PKMN-REGULAR" : "pkmn_regular"}}
          >
            {name}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 0.5,
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  index: {
    color: "white",
    fontWeight: "800",
    fontSize: 12,
  },
});
