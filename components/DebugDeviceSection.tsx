import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import * as Device from "expo-device";

export default function DebugDeviceSection() {
  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Device</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>model: {Device.modelName}, os:{Device.osName} {Device.osVersion}, brand: {Device.brand}</DebugItem.Text>
      </DebugItem>
    </>
  );
}
