import React from "react";
import { femalePink, maleBlue } from "@/constants/colors";
import { Mars, Venus } from "@tamagui/lucide-icons";

export default function GenderIcon() {
  const isMale = Math.random() < 0.5;
  return isMale ? <Mars size="$1" col={maleBlue} /> : <Venus size="$1" col={femalePink} />;
}
