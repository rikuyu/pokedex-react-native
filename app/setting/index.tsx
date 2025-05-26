import React from "react";
import { ScrollView } from "tamagui";
import DebugNotificationSection from "@/components/DebugNotificationSection";

export default function Index() {
  return (
    <ScrollView f={1} bg={"$background"} py={14}>
      <DebugNotificationSection/>
    </ScrollView>
  );
};
