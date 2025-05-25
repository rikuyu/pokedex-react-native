import React from "react";
import { useAppTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "@tamagui/lucide-icons";
import { View } from "tamagui";

export default function ThemeToggleButton() {
  const {theme, setTheme} = useAppTheme();

  return (
    <View
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      pressStyle={{o: 0.7}}
      bg={"rgba(100,98,98,0.6)"}
      ai={"center"} jc={"center"}
      br={18}
      ar={1}
      w={"$3.5"} h={"$3.5"}
      pos={"absolute"} t={8} r={8}
    >
      {theme === "light" ? <Moon size="$1" col="white"/> : <Sun size="$1" col="white"/>}
    </View>
  );
}
