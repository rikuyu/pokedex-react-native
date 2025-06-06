import { Stack } from "expo-router";
import IosBackButton from "@/components/IosBackButton";
import React from "react";
import { headerStyle } from "@/constants/colors";
import { i18nText } from "@/utils/i18n";
import { isIos } from "@/utils/platform";
import { SettingIcon } from "@/components/SettingIcon";

export default function EditLayout() {
  return (
    <Stack
      screenOptions={{
        title: i18nText("editTitle"),
        headerStyle,
        headerTintColor: "#ffffff",
        headerLeft: () => isIos ? <IosBackButton iconColor={"white"}/> : null,
        headerRight: () => <SettingIcon />,
      }}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
