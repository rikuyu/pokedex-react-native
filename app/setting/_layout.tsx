import { Stack } from "expo-router";
import IosBackButton from "@/components/IosBackButton";
import React from "react";
import { headerStyle } from "@/constants/colors";
import { i18nText } from "@/utils/i18n";
import { isIos } from "@/utils/platform";

export default function SettingLayout() {
  console.log(`EXPO_PUBLIC_TEST=${process.env.EXPO_PUBLIC_TEST}`);

  return (
    <Stack
      screenOptions={{
        title: i18nText("setting"),
        headerStyle,
        headerTintColor: "#ffffff",
        headerLeft: () => isIos ? <IosBackButton iconColor={"white"}/> : null,
      }}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
