import React from "react";
import { Profile } from "@/services/profileStorage";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  profile: Profile;
}

export default function BiographySection({profile}: Props) {
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
