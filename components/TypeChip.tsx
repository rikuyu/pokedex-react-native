import React from "react";
import { getColorIsLight } from "@/utils/getColorIsLight";
import { Chip } from "@/components/Chip";
import { TypeColor } from "@/utils/typeData";

type Props = {
  name: string;
  color: TypeColor;
}

export default function TypeChip({name, color}: Props) {
  const labelColor = getColorIsLight(color) ? "black" : "white";
  return (
    <Chip bg={color}>
      <Chip.Text col={labelColor}>{name}</Chip.Text>
    </Chip>
  );
}
