import React from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { useAppTheme } from "@/utils/ThemeContext";

export default function ThemeToggleButton({positionStyle}: { positionStyle: ViewStyle }) {
  const {theme, setTheme} = useAppTheme();
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
          <Fontisto name="night-clear" size={20} color="white"/> :
          <Entypo name="light-up" size={20} color="white"/>
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
