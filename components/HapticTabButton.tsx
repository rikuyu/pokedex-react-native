import React from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";

export default function HapticTabButton(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(event) => {
        void Haptics.selectionAsync();
        props.onPressIn?.(event);
      }}
    />
  );
}
