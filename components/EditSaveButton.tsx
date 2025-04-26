import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { darkTextColor, pokedexRed } from "@/constants/colors";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  onPress: () => void,
}

export default function EditSaveButton({onPress}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.btn}>
        <ThemedText
          type="size16Bold"
          lightColor={darkTextColor}
          darkColor={darkTextColor}
        >
          Save
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
