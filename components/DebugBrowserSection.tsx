import React, { useState } from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { View, YStack } from "tamagui";
import * as WebBrowser from "expo-web-browser";

export default function DebugBrowserSection() {
  const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://github.com/rikuyu/pokedex-react-native");
    setResult(result);
  };

  return (
    <YStack onPress={_handlePressButtonAsync}>
      <DebugTitle>
        <DebugTitle.Text>Web Browser</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>Open</DebugItem.Text>
        <View f={1}/>
        {result && <DebugItem.Text>{JSON.stringify(result)}</DebugItem.Text>}
      </DebugItem>
    </YStack>
  );
}
