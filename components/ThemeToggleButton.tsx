import React from "react";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { useAppTheme } from "@/utils/ThemeContext";
import { Moon, Sun } from "@tamagui/lucide-icons";
import { View } from "tamagui";

export default function ThemeToggleButton({positionStyle}: { positionStyle: ViewStyle }) {
  const {theme, setTheme} = useAppTheme();

  return (
    <View
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      pressStyle={{o: 0.7}}
      style={positionStyle}
      bg={"rgba(100,98,98,0.6)"}
      ai={"center"}
      jc={"center"}
      br={18}
      ar={1}
      h={"$3.5"}
      w={"$3.5"}
    >
      {theme === "light" ? <Moon size="$1" col="white"/> : <Sun size="$1" col="white"/>}
    </View>
  );
}
