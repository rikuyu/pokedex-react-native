import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BiographySection() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name</Text>
      <View style={{height: 8}}/>
      <Text style={styles.id}>@_name</Text>
      <View style={{height: 12}}/>
      <Text style={styles.description}>Hello, I am a Software Engineer. My hobby is playing tennis.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  id: {
    fontSize: 16,
    color: "#b1b1b1",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});
