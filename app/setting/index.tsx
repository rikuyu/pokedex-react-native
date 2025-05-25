import React from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { useNotification } from "@/context/NotificationContext";
import { sendLocalNotification, sendPushNotification } from "@/utils/notifications";
import { BellRing } from "@tamagui/lucide-icons";

export default function Index() {
  const {expoPushToken, notification, error} = useNotification();

  console.log("🔔 Expo Push Token:", expoPushToken);
  console.log("🔔 Notification:", notification);

  if (error) {
    console.log(`🔔 ${error}`);
  }

  return (
    <YStack f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <XStack
        w={"100%"}
        px={20}
        py={16}
        bg={"blue"}
        ai={"center"}
        jc={"flex-start"}
        onPress={async () => await sendLocalNotification()}
      >
        <BellRing col={"$color"} size={24}/>
        <View w={8}/>
        <Text fos={14}>通知:{expoPushToken}</Text>
      </XStack>
      <XStack
        w={"100%"}
        px={20}
        py={16}
        bg={"blue"}
        ai={"center"}
        jc={"flex-start"}
        onPress={async () => {
          if (!expoPushToken) {
            console.log("Expo Push Token is not available.");
            return;
          }
          await sendPushNotification(expoPushToken);
        }}
      >
        <BellRing col={"$color"} size={24}/>
        <View w={8}/>
        <Text fos={14}>通知:{expoPushToken}</Text>
      </XStack>
    </YStack>
  );
};
