import React, { useEffect, useState } from "react";
import { YStack } from "tamagui";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import * as ScreenCapture from "expo-screen-capture";

export default function DebugScreenCaptureSection() {
  const [status, setStatus] = useState<"enable" | "disable">("enable");

  const toggleScreenCapture = async () => {
    if (status === "enable") {
      await ScreenCapture.preventScreenCaptureAsync();
      setStatus("disable");
    } else {
      await ScreenCapture.allowScreenCaptureAsync();
      setStatus("enable");
    }
  };

  useEffect(() => {
    let subscription: ScreenCapture.Subscription;

    const addListenerAsync = async () => {
      subscription = ScreenCapture.addScreenshotListener(() => {
        alert("Screenshot detected! 📸");
      });
    };

    void addListenerAsync();

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <YStack onPress={toggleScreenCapture}>
      <DebugTitle>
        <DebugTitle.Text>Control Screen Capture</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>{status}</DebugItem.Text>
      </DebugItem>
    </YStack>
  );
}
