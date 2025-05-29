import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { useAppTheme } from "@/context/ThemeContext";
import { View, YStack } from "tamagui";
import { Moon, Sun } from "@tamagui/lucide-icons";

export default function DebugThemeSection() {
  const {theme, setTheme} = useAppTheme();

  return (
    <YStack onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
      <DebugTitle>
        <DebugTitle.Text>Light / Dark Theme</DebugTitle.Text>
      </DebugTitle>
      <DebugItem>
        <DebugItem.Text>
          {theme === "light" ? "Light" : "Dark"}
        </DebugItem.Text>
        <View f={1}/>
        {theme === "light" ? <Sun size="$1" col="$color"/> : <Moon size="$1" col="$color"/>}
        <View w={6}/>
      </DebugItem>
    </YStack>
  );
}
