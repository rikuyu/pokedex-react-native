import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { sendLocalNotification, sendPushNotification } from "@/utils/notifications";
import { useNotification } from "@/context/NotificationContext";
import * as Clipboard from "expo-clipboard";

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
        <DebugItem.Text>Push：{expoPushToken || "null"}</DebugItem.Text>
      </DebugItem>
      <DebugItem onPress={debugLocalNotification}>
        <DebugItem.Text>Local</DebugItem.Text>
      </DebugItem>
    </>
  );
}
