import React, { createContext, useContext, useEffect, useState } from "react";
import { registerForPushNotificationsAsync } from "@/services/notifications";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import { Href } from "expo-router/build/types";

interface NotificationContextType {
  expoPushToken: string | undefined;
  notification: Notifications.Notification | undefined;
  error: Error | undefined;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification must be used within NotificationProvider");
  return context;
};

function redirect(notification: Notifications.Notification) {
  const route = notification.request.content.data.route as Href;
  if (route) {
    router.push(route);
  }
}

export const NotificationProvider = ({children}: { children: React.ReactElement | React.ReactElement[] }) => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>(undefined);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ""))
      .catch((error) => setError(error));

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log("🔔 Notification Received:", notification.request.content.title);
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("🔔 Notification Response received:", response.notification.request.content.title);
      redirect(response.notification);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <NotificationContext.Provider value={{expoPushToken, notification, error}}>
      {children}
    </NotificationContext.Provider>
  );
};
