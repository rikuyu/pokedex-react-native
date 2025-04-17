import { Stack } from "expo-router";
import { Platform } from "react-native";
import IosBackButton from "@/components/IosBackButton";
import React from "react";

export default function EditLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Edit Profile",
        tabBarStyle: {
          backgroundColor: "#ff4545",
        },
        headerStyle: {
          backgroundColor: "#ff4545",
        },
        headerTintColor: "#ffffff",
        headerLeft: () => Platform.OS === "ios" ? <IosBackButton iconColor={"white"}/> : null,
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}
