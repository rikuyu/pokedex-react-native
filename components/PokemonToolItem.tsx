import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { darkBackground, lightBackground } from "@/constants/colors";
import { BerryData } from "@/types/berry";
import { useAppTheme } from "@/utils/ThemeContext";

type Props = {
  berry: BerryData;
}

export default function PokemonToolItem({berry}: Props) {
  const imageBackgroundColor = useThemeColor({light: darkBackground, dark: lightBackground});
  const {theme} = useAppTheme();

  return (
    <ThemedView style={[styles.container]}>
      {theme === "light" ? (
        <Image
          style={styles.image}
          source={{uri: berry.image}}
        />
      ) : (
        <ThemedView style={[styles.imageContainer, {backgroundColor: imageBackgroundColor}]}>
          <Image
            style={styles.image}
            source={{uri: berry.image}}
          />
        </ThemedView>
      )}
      <ThemedView style={{width: 12}}/>
      <ThemedView style={styles.description}>
        <ThemedText type={"size14Medium"}>{berry.name}</ThemedText>
        <ThemedView style={{height: 4}}/>
        <ThemedText type={"size12Normal"}>
          {berry.description.replace(/[　\n]/g, "").split("。")[0]}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
  description: {
    flex: 1,
    flexDirection: "column",
  },
});
