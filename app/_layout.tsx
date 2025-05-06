import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/utils/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { alertDBError, DATABASE_NAME } from "@/services/db";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

const client = new QueryClient();

export default function RootLayout() {
  const expoDb = openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDb);
  const {error} = useMigrations(db, migrations);

  if (error) {
    alertDBError(error);
  }

  useDrizzleStudio(expoDb);

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <SQLiteProvider databaseName={DATABASE_NAME}>
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
              <Stack.Screen name="pokemon/[id]"/>
              <Stack.Screen name="edit" options={{headerShown: false}}/>
              <Stack.Screen name="+not-found"/>
            </Stack>
          </SafeAreaProvider>
          <StatusBar style="light"/>
        </SQLiteProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
