import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initDB } from "@/services/database";
import { Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/utils/ThemeContext";
import Constants, { ExecutionEnvironment } from "expo-constants";

export default function RootLayout() {
  switch (Constants.executionEnvironment) {
    case ExecutionEnvironment.Bare:
      console.log("Bare");
      break;
    case ExecutionEnvironment.Standalone:
      console.log("Standalone");
      break;
    case ExecutionEnvironment.StoreClient:
      console.log("StoreClient");
      break;
  }
  return (
    <ThemeProvider>
      <SQLiteProvider
        databaseName="pokedex.db"
        onInit={initDB}
        onError={alertDBError}
      >
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="+not-found"/>
            <Stack.Screen name="pokemon/[id]"/>
            <Stack.Screen name="edit" options={{headerShown: false}}/>
          </Stack>
        </SafeAreaProvider>
        <StatusBar style="light"/>
      </SQLiteProvider>
    </ThemeProvider>
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
