import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import * as Linking from "expo-linking";
import { useDeepLinkLogger } from "@/context/DeepLinkLoggerContext";
import { View } from "tamagui";

export default function DebugLinkingSection() {
  const {scheme, hostname, path, queryParams} = useDeepLinkLogger();

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Linking</DebugTitle.Text>
      </DebugTitle>
      <DebugItem onPress={() => Linking.openURL("pokedex://pokemon/129?name=コイキング")}>
        <DebugItem.Text>deep link</DebugItem.Text>
        <View f={1}/>
        <DebugItem.Text>{`${scheme}, ${hostname}, ${path}, ${queryParams}`}</DebugItem.Text>
      </DebugItem>
      <DebugItem onPress={() => Linking.openURL("mailto:support@expo.dev")}>
        <DebugItem.Text>mailto</DebugItem.Text>
      </DebugItem>
      <DebugItem onPress={() => Linking.openURL("tel:+123456789")}>
        <DebugItem.Text>tel</DebugItem.Text>
      </DebugItem>
      <DebugItem bordered onPress={() => Linking.openURL("sms:+123456789")}>
        <DebugItem.Text>sms</DebugItem.Text>
      </DebugItem>
    </>
  );
}
