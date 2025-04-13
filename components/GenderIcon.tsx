import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function GenderIcon() {
  const isMale = Math.random() < 0.5;
  return (
    isMale ?
      <MaterialIcons name="male" size={20} color="#68abfc"/>
      :
      <MaterialIcons name="female" size={20} color="#fcacac"/>
  );
}
