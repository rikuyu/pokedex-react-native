import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Profile } from "@/services/profileStore";

type Props = {
  profile: Profile;
}

export default function BiographySection({profile}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profile.name}</Text>
      <View style={{height: 8}}/>
      <Text style={styles.id}>@xyz_abc_id</Text>
      <View style={{height: 12}}/>
      <Text style={styles.description}>{profile.description}</Text>
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
