import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { useBatteryLevel } from "expo-battery";
import { i18nText } from "@/utils/i18n";

export default function DebugBatterySection() {
  const batteryLevel = useBatteryLevel();

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Battery</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>
          {i18nText("batteryLevel")}: {batteryLevel === -1 ? batteryLevel : `${Math.round(batteryLevel * 100)}%`}
        </DebugItem.Text>
      </DebugItem>
    </>
  );
}
