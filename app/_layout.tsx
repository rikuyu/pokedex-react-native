import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { alertDBError, initDB } from "@/services/database";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/utils/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function RootLayout() {
  console.log(`EXPO_PUBLIC_TEST=${process.env.EXPO_PUBLIC_TEST}`);

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <SQLiteProvider
          databaseName="pokedex.db"
          onInit={initDB}
          onError={alertDBError}
        >
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
