import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  color: string;
  onPress: () => void;
}

export default function Bookmark({color, onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={40}
    >
      <MaterialIcons
        name="bookmark-outline"
        color={color}
        size={24}
      />
    </TouchableOpacity>
  );
}
