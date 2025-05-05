import React from "react";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  isBookmarked: boolean;
  color: string;
  onPress: () => void;
}

export default function Bookmark({color, isBookmarked, onPress}: Props) {
  return (
    <Pressable onPress={onPress} hitSlop={40}>
      <MaterialIcons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        color={color}
        size={24}
      />
    </Pressable>
  );
}
