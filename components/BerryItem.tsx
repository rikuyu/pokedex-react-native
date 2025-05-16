import React from "react";
import { BerryData } from "@/types/berry";
import { useAppTheme } from "@/utils/ThemeContext";
import { Image, Text, View, XStack, YStack } from "tamagui";

export default function BerryItem({berry}: { berry: BerryData }) {
  const {theme} = useAppTheme();

  return (
    <XStack jc={"flex-start"} ai={"center"} px={20} py={16}>
      {theme === "light" ?
        <Image w={32} h={32} source={{uri: berry.image}}/>
        :
        <View bg={"#edf3fc"} w={40} h={40} br={8} ai={"center"} jc={"center"}>
          <Image w={32} h={32} source={{uri: berry.image}}/>
        </View>
      }
      <View w={12}/>
      <YStack>
        <Text fos={14} fow={"500"}>{berry.name}</Text>
        <View h={8}/>
        <Text fos={12} fow={"normal"}>
          {berry.description.replace(/[　\n]/g, "").split("。")[0]}
        </Text>
      </YStack>
    </XStack>
  );
}
