import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { YStack } from "tamagui";
import { router } from "expo-router";

export default function DebugNotFoundSection() {
  return (
    // @ts-ignore
    <YStack onPress={() => router.push("/test")}>
      <DebugTitle>
        <DebugTitle.Text>Not Found</DebugTitle.Text>
      </DebugTitle>
      <DebugItem>
        <DebugItem.Text>navigate wrong route</DebugItem.Text>
      </DebugItem>
    </YStack>
  );
}
