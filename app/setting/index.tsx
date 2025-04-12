import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import BackButton from "@/components/BackButton";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Setting",
      tabBarStyle: {
        backgroundColor: "#ff4545",
      },
      headerStyle: {
        backgroundColor: "#ff4545",
      },
      headerTintColor: "#ffffff",
      headerLeft: () => <BackButton iconColor={"white"}/>,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{"setting"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
