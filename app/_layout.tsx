import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initDB } from "@/services/database";
import { Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
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
      </SQLiteProvider>
    </>
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
