import React from "react";
import { View, YStack } from "tamagui";

export default function ItemBadge() {
  return (
    <YStack pos={"absolute"} b={12} r={16} w={8} h={12} boc={"#808080"} bw={0.5}>
      <View f={1} bc={"$itemBadgeYellow"}/>
      <View f={1} bc={"$itemBadgeOrange"}/>
      <View f={1} bc={"$itemBadgeYellow"}/>
    </YStack>
  );
}
