import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function IosBackButton({iconColor}: { iconColor: string }) {
  const router = useRouter();
  return (
    <Pressable
      style={{padding: 10, marginLeft: -10}}
      onPress={() => router.dismiss()}
      hitSlop={40}
      testID={"ios-back-button"}
    >
      <AntDesign name="left" size={24} color={iconColor}/>
    </Pressable>
  );
}
