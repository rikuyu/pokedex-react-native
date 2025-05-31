import React, { useState } from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import * as Brightness from "expo-brightness";
import { View, YStack } from "tamagui";

export default function DebugBrightnessSection() {
  const [permission, setPermission] = useState<"idle" | "granted" | "denied">("idle");
  const [brightness, setBrightness] = useState<number | null>(null);

  const toggleBrightness = async () => {
    const {status} = await Brightness.requestPermissionsAsync();
    if (status === "granted") {
      setPermission("granted");
      const currentBrightness = await Brightness.getBrightnessAsync();
      const newBrightness = currentBrightness === 1 ? 0 : 1;
      await Brightness.setBrightnessAsync(newBrightness);
      setBrightness(newBrightness);
    } else {
      setPermission("denied");
    }
  };

  return (
    <YStack onPress={toggleBrightness}>
      <DebugTitle>
        <DebugTitle.Text>Brightness</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>
          {{
            idle: "Press to Request Permission",
            granted: "Permission Granted",
            denied: "Permission Denied",
          }[permission]}
        </DebugItem.Text>
        <View f={1}/>
        <DebugItem.Text>{brightness !== null ? brightness : "-"}</DebugItem.Text>
      </DebugItem>
    </YStack>
  );
}
