import React from "react";
import { StyleSheet } from "react-native";
import { Profile } from "@/services/profileStore";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  profile: Profile;
}

export default function BiographySection({profile}: Props) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="size20Bold">{profile.name}</ThemedText>
      <ThemedView style={{height: 8}}/>
      <ThemedText
        type="size16Normal"
        lightColor={"#b1b1b1"}
        darkColor={"#b1b1b1"}
      >
        @xyz_abc_id
      </ThemedText>
      <ThemedView style={{height: 12}}/>
      <ThemedText type="size16Normal">{profile.description}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  id: {
    fontSize: 16,
    color: "#b1b1b1",
  },
});
