import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
        <Stack.Screen name="pokemon/[id]"/>
        <Stack.Screen name="setting"/>
      </Stack>
    </>
  );
}
