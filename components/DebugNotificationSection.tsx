import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { sendLocalNotification, sendPushNotification } from "@/utils/notifications";
import { useNotification } from "@/context/NotificationContext";

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
    await sendPushNotification(expoPushToken);
  };

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Notification</DebugTitle.Text>
      </DebugTitle>
      <DebugItem onPress={debugLocalNotification}>
        <DebugItem.Text>Push通知：{expoPushToken || "null"}</DebugItem.Text>
      </DebugItem>
      <DebugItem onPress={debugRemoteNotification}>
        <DebugItem.Text>Local通知</DebugItem.Text>
      </DebugItem>
    </>
  );
}
