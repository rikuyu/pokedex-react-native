import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DATABASE_NAME } from "@/services/db";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Alert } from "react-native";
import { tamaguiConfig } from "@/tamagui.config";
import { TamaguiProvider } from "tamagui";
import { useQuickActionSetup } from "@/hooks/useQuickActionSetup";
import { NotificationProvider } from "@/context/NotificationContext";

const client = new QueryClient();
const expoDb = openDatabaseSync(DATABASE_NAME);

export default function RootLayout() {
  useQuickActionSetup();

  const db = drizzle(expoDb);
  const {error} = useMigrations(db, migrations);
  if (error) {
    alertDBError(error);
  }

  useDrizzleStudio(expoDb);

  return (
    <QueryClientProvider client={client}>
      <SQLiteProvider databaseName={DATABASE_NAME}>
        <NotificationProvider>
          <TamaguiProvider config={tamaguiConfig} defaultTheme={"light"}>
            <ThemeProvider>
              <SafeAreaProvider>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                  <Stack.Screen name="pokemon/[id]"/>
                  <Stack.Screen name="edit" options={{headerShown: false}}/>
                  <Stack.Screen name="setting" options={{headerShown: false}}/>
                  <Stack.Screen name="+not-found"/>
                </Stack>
              </SafeAreaProvider>
              <StatusBar style="light"/>
            </ThemeProvider>
          </TamaguiProvider>
        </NotificationProvider>
      </SQLiteProvider>
    </QueryClientProvider>
  );
}

const alertDBError = (error: Error) => {
  return Alert.alert(
    "DB Error",
    "Failed to initialize the database.",
    [
      {
        text: "OK",
        onPress: () => {
          console.log(error.name);
          console.log(error.message);
        },
      },
    ]);
};
