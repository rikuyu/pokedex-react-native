import React from "react";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  isBookmarked: boolean;
  color: "black" | "white";
  onPress: () => void;
}

export default function Bookmark({color, isBookmarked, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={40}
      testID={isBookmarked ? "bookmark-button-on" : "bookmark-button-off"}
    >
      <MaterialIcons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        color={color}
        size={24}
      />
    </Pressable>
  );
}
