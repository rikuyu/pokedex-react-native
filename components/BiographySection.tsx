import React from "react";
import { Profile } from "@/services/profileStorage";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function BiographySection({profile}: { profile: Profile }) {
  return (
    <ThemedView style={{paddingHorizontal: 20, paddingBottom: 16}}>
      <ThemedText type="size20Bold">{profile.name}</ThemedText>
      <ThemedView style={{height: 8}}/>
      <ThemedText type="size16Normal">@xyz_abc_id</ThemedText>
      <ThemedView style={{height: 12}}/>
      <ThemedText type="size16Normal">{profile.description}</ThemedText>
    </ThemedView>
  );
}
