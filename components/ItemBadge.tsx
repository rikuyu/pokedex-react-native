import React from "react";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { View } from "tamagui";

export default function ItemBadge({positionStyle}: { positionStyle: StyleProp<ViewStyle> }) {
  return (
    <View style={positionStyle} w={8} h={12} boc={"#808080"} bw={0.5}>
      <View f={1} bc={"$itemBadgeYellow"}/>
      <View f={1} bc={"$itemBadgeOrange"}/>
      <View f={1} bc={"$itemBadgeYellow"}/>
    </View>
  );
}
