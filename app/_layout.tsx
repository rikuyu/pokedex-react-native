import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initDB } from "@/services/database";
import { Alert } from "react-native";

export default function RootLayout() {
  return (
    <>
      <SQLiteProvider
        databaseName="pokedex.db"
        onInit={initDB}
        onError={alertDBError}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          <Stack.Screen name="+not-found"/>
          <Stack.Screen name="pokemon/[id]"/>
          <Stack.Screen name="setting"/>
        </Stack>
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
