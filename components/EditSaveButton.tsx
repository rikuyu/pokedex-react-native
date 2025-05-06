import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { darkTextColor, pokedexRed } from "@/constants/colors";
import { ThemedText } from "@/components/ThemedText";
import { i18nText } from "@/utils/i18n";

type Props = {
  onPress: () => void,
}

export default function EditSaveButton({onPress}: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.btn}>
        <ThemedText
          type="size16Bold"
          lightColor={darkTextColor}
          darkColor={darkTextColor}
        >
          {i18nText("save")}
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: pokedexRed,
    borderRadius: 8,
    width: "90%",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
