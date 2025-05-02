import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type Props = {
  height: number;
  onPress: () => void;
}

export default function EditButtonSection({height, onPress}: Props) {
  const color = useThemeColor(undefined, "text");

  return (
    <ThemedView style={{height: height + 16}}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderColor: color,
            borderRadius: height / 2,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <ThemedText
          type="size16Medium"
          style={{textAlign: "center"}}
        >
          Edit Profile
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
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
});
