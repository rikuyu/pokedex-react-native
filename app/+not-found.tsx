import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{title: "Oops! Not Found"}}/>
      <View style={styles.container}>
        <Text>
          This path may be wrong.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
