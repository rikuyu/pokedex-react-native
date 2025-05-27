import React from "react";
import { ScrollView, View } from "tamagui";
import DebugNotificationSection from "@/components/DebugNotificationSection";
import DebugBatterySection from "@/components/DebugBatterySection";
import DebugDeviceSection from "@/components/DebugDeviceSection";
import DebugNotFoundSection from "@/components/DebugNotFoundSection";

export default function Index() {
  return (
    <ScrollView f={1} bg={"$background"} py={14}>
      <DebugNotificationSection/>
      <View h={20}/>
      <DebugBatterySection/>
      <View h={20}/>
      <DebugDeviceSection/>
      <View h={20}/>
      <DebugNotFoundSection />
    </ScrollView>
  );
};
