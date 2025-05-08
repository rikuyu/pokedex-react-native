import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { femalePink, maleBlue } from "@/constants/colors";

export default function GenderIcon() {
  const isMale = Math.random() < 0.5;
  return (
    isMale ?
      <MaterialIcons name="male" size={20} color={maleBlue}/>
      :
      <MaterialIcons name="female" size={20} color={femalePink}/>
  );
}
