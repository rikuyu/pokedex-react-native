import React from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { useAppTheme } from "@/utils/ThemeContext";

type Props = {
  positionStyle: ViewStyle;
}

export default function ThemeToggleButton({positionStyle}: Props) {
  const {theme, setTheme} = useAppTheme();
  const iconSize = 20;
  const iconColor = "white";
  return (
    <Pressable
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      style={({pressed}) => [
        styles.btn,
        positionStyle,
        {opacity: pressed ? 0.7 : 1},
      ]}
    >
      {
        theme === "light" ?
          <Entypo name="light-up" size={iconSize} color={iconColor}/> :
          <Fontisto name="night-clear" size={iconSize} color={iconColor}/>
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 40,
    aspectRatio: 1,
    borderRadius: 18,
    backgroundColor: "rgba(100,98,98,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
});
