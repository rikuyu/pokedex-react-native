import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Image, View, ZStack } from "tamagui";

type Props = {
  imageSize: number,
  iconImg: string | undefined;
  setIcon: () => void;
  headerImg: string | undefined;
  setHeader: () => void;
}

export default function EditHeaderSection({imageSize, iconImg, setIcon, headerImg, setHeader}: Props) {
  const header = headerImg ? {uri: headerImg} : require("../assets/images/header_placeholder.png");
  const icon = iconImg ? {uri: iconImg} : require("../assets/images/profile_image.png");

  return (
    <ZStack h={130}>
      <ZStack onPress={setHeader} pressStyle={{o: 0.9}} h={130}>
        <Image source={header} w={"100%"} h={"100%"} objectFit="cover"/>
        <View
          bg={"#00000055"}
          jc={"center"} ai={"center"}
          t={0} b={0} r={0} l={0}
          pos={"absolute"}
        >
          <MaterialCommunityIcons name="camera-plus-outline" color="#fff" size={32}/>
        </View>
        <ThemeToggleButton/>
      </ZStack>
      <ZStack onPress={setIcon} pressStyle={{o: 0.9}} b={imageSize / 2} l={16} pos={"absolute"}>
        <Image source={icon} objectFit="cover" w={imageSize} h={imageSize} br={50}/>
        <View
          jc={"center"} ai={"center"}
          w={imageSize} h={imageSize}
          pos={"absolute"} t={0} b={0} r={0} l={0}
          br={50} bw={2} boc={"black"}
          bg={"#00000055"}
        >
          <MaterialCommunityIcons name="camera-plus-outline" color="#fff" size={28}/>
        </View>
      </ZStack>
    </ZStack>
  );
}
