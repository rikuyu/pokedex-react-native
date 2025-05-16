import React from "react";
import GenderIcon from "@/components/GenderIcon";
import TypeBadge from "@/components/TypeBadge";
import { Text, View } from "tamagui";

type Props = {
  typeFirst: string;
  typeSecond: string | null;
};

export default function GenderAndTypes({typeFirst, typeSecond}: Props) {
  return (
    <View fd={"row"} ai={"center"} jc={"flex-start"}>
      <GenderIcon/>
      <View w={4}/>
      <Text fos={14} fow={"normal"}>/</Text>
      <View w={8}/>
      <TypeBadge type={typeFirst}/>
      {typeSecond && (
        <>
          <View w={4}/>
          <TypeBadge type={typeSecond}/>
        </>
      )}
    </View>
  );
}
