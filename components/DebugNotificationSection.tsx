import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { sendLocalNotification, sendPushNotification } from "@/services/notifications";
import { useNotification } from "@/context/NotificationContext";
import * as Clipboard from "expo-clipboard";
import { View } from "tamagui";

export default function DebugNotificationSection() {
  const {expoPushToken, notification, error} = useNotification();

  console.log("🔔 Notification:", notification);
  if (error) {
    console.log(`🔔 ${error}`);
  }

  const debugLocalNotification = async () => await sendLocalNotification();

  const debugRemoteNotification = async () => {
    if (!expoPushToken) {
      console.log("Expo Push Token is not available.");
      return;
    }
    await Clipboard.setStringAsync(expoPushToken);
    await sendPushNotification(expoPushToken);
  };

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Notification</DebugTitle.Text>
      </DebugTitle>
      <DebugItem onPress={debugRemoteNotification}>
        <DebugItem.Text>
          Push：
          {error ? <DebugItem.Text col="$pokedexRed">error</DebugItem.Text> : expoPushToken || "null"}
        </DebugItem.Text>
      </DebugItem>
      <DebugItem onPress={debugLocalNotification}>
        <DebugItem.Text>Local リダイレクト機能</DebugItem.Text>
        <View w={8}/>
        {error && <DebugItem.Text col="$pokedexRed">error</DebugItem.Text>}
      </DebugItem>
    </>
  );
}
