import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  iconColor: string;
}

export default function IosBackButton({iconColor}: Props) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.dismiss()}
      hitSlop={40}
      style={{
        padding: 10,
        marginLeft: -10,
      }}
    >
      <AntDesign name="left" size={24} color={iconColor}/>
    </Pressable>
  );
}
