import React, { createContext, useContext, useEffect, useState } from "react";
import { registerForPushNotificationsAsync } from "@/utils/notifications";
import * as Notifications from "expo-notifications";

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

export const NotificationProvider = ({children}: { children: React.ReactElement | React.ReactElement[] }) => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>(undefined);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ""))
      .catch((error) => setError(error));

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log("🔔 Notification Received:", notification);
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("🔔 Notification Response received:", response);
      console.log(response);
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
