import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditNameSection from "@/components/EditNameSection";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <EditHeaderSection positionStyle={styles.headerContainer}/>
      <View style={styles.spacer}/>
      <EditNameSection/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerContainer: {
    zIndex: 2,
  },
  spacer: {
    height: 80,
  },
});
