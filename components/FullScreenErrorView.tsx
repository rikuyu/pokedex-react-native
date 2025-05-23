import React from "react";
import { Text, View } from "tamagui";

export default function FullScreenErrorView({message}: { message?: string }) {
  return (
    <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <Text fos={16}>{message || "Error"}</Text>
    </View>
  );
}
