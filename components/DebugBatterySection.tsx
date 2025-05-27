import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { useBatteryLevel } from "expo-battery";

export default function DebugBatterySection() {
  const batteryLevel = useBatteryLevel();

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Battery</DebugTitle.Text>
      </DebugTitle>
      <DebugItem>
        <DebugItem.Text>Current Battery Level: {batteryLevel}</DebugItem.Text>
      </DebugItem>
    </>
  );
}
