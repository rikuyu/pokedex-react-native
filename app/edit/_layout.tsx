import { Stack } from "expo-router";
import { Platform } from "react-native";
import IosBackButton from "@/components/IosBackButton";
import React from "react";
import { headerStyle, tabBarStyle } from "@/constants/colors";

export default function EditLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Edit Profile",
        headerStyle,
        tabBarStyle,
        headerTintColor: "#ffffff",
        headerLeft: () => Platform.OS === "ios" ? <IosBackButton iconColor={"white"}/> : null,
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}
