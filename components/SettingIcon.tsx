import { Settings } from "@tamagui/lucide-icons";
import React from "react";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export const SettingIcon = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/setting")}>
      <Settings size={24} col={"white"}/>
    </Pressable>
  );
};
