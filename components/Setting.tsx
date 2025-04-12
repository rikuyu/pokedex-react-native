import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
}

export default function Setting({onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={40}
      style={{marginEnd: 12}}
    >
      <MaterialIcons name="settings" size={24} color="white"/>
    </TouchableOpacity>
  );
}
