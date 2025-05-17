import React from "react";
import { isJa } from "@/utils/i18n";
import { Text, View, YStack } from "tamagui";

type Props = {
  label: "h" | "w";
  value: number;
}

export default function PhysicalCard({label, value}: Props) {
  return (
    <YStack h={76} w={76} ai={"center"} jc={"center"} br={12} bc={"$background"}>
      <Text fos={16} fow={"bold"}>
        {isJa
          ? label === "h" ? "たかさ" : "おもさ"
          : label === "h" ? "Height" : "Weight"}
      </Text>
      <View h={8}/>
      <Text fos={16} fow={"400"}>{`${value}${label === "h" ? "m" : "kg"}`}</Text>
    </YStack>
  );
}
