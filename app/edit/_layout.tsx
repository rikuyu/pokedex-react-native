import { Stack } from "expo-router";
import { Platform } from "react-native";
import IosBackButton from "@/components/IosBackButton";
import React from "react";
import { headerStyle } from "@/constants/colors";

export default function EditLayout() {
  console.log(`EXPO_PUBLIC_TEST=${process.env.EXPO_PUBLIC_TEST}`);
  return (
    <Stack
      screenOptions={{
        title: "Edit Profile",
        headerStyle,
        headerTintColor: "#ffffff",
        headerLeft: () => Platform.OS === "ios" ? <IosBackButton iconColor={"white"}/> : null,
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}
