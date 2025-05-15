import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/utils/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DATABASE_NAME } from "@/services/db";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Alert } from "react-native";
import tamaguiConfig from "@/tamagui.config";
import { TamaguiProvider } from "tamagui";

const client = new QueryClient();
const expoDb = openDatabaseSync(DATABASE_NAME);

export default function RootLayout() {
  const db = drizzle(expoDb);
  const {error} = useMigrations(db, migrations);

  if (error) {
    alertDBError(error);
  }

  useDrizzleStudio(expoDb);

  return (
    <QueryClientProvider client={client}>
      <SQLiteProvider databaseName={DATABASE_NAME}>
        <TamaguiProvider config={tamaguiConfig}>
          <ThemeProvider>
            <SafeAreaProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="pokemon/[id]"/>
                <Stack.Screen name="edit" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
              </Stack>
            </SafeAreaProvider>
            <StatusBar style="light"/>
          </ThemeProvider>
        </TamaguiProvider>
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
