import React from "react";
import { ScrollView, View } from "tamagui";
import DebugNotificationSection from "@/components/DebugNotificationSection";
import DebugBatterySection from "@/components/DebugBatterySection";
import DebugDeviceSection from "@/components/DebugDeviceSection";
import DebugNotFoundSection from "@/components/DebugNotFoundSection";
import DebugLottieSection from "@/components/DebugLottieSection";
import DebugThemeSection from "@/components/DebugThemeSection";
import DebugBrowserSection from "@/components/DebugBrowserSection";
import DebugLinkingSection from "@/components/DebugLinkingSection";
import DebugAppSection from "@/components/DebugAppSection";

export default function Index() {
  return (
    <ScrollView f={1} bg={"$background"} py={14}>
      <DebugNotificationSection/>
      <View h={20}/>
      <DebugAppSection/>
      <View h={20}/>
      <DebugBatterySection/>
      <View h={20}/>
      <DebugDeviceSection/>
      <View h={20}/>
      <DebugNotFoundSection/>
      <View h={20}/>
      <DebugLottieSection/>
      <View h={20}/>
      <DebugThemeSection/>
      <View h={20}/>
      <DebugBrowserSection/>
      <View h={20}/>
      <DebugLinkingSection/>
      <View h={100}/>
    </ScrollView>
  );
};
