import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { pokedexRed } from "@/constants/colors";

type Props = {
  onPress: () => void,
}

export default function EditSaveButton({onPress}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.btn}>
        <Text style={styles.label}>Save</Text>
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
  label: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});
