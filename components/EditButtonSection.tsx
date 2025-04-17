import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";

type Props = {
  height: number;
  onPress: () => void;
}

export default function EditButtonSection({height, onPress}: Props) {
  const contentColor = "#fff";
  return (
    <View style={{height: height + 16, backgroundColor: "#000"}}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderColor: contentColor,
            borderRadius: height / 2,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Text style={[styles.text, {color: contentColor}]}>
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    borderWidth: 1,
    width: "30%",
    position: "absolute",
    right: 12,
    top: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
