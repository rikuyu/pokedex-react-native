import React from "react";
import { Profile } from "@/services/profileStorage";
import { Text, View, YStack } from "tamagui";

export default function BiographySection({profile}: { profile: Profile }) {
  return (
    <YStack px={20} pb={16}>
      <Text fos={20} fow={"bold"}>{profile.name}</Text>
      <View h={8}/>
      <Text fos={16} fow={"normal"}>@xyz_abc_id</Text>
      <View h={12}/>
      <Text fos={16} fow={"normal"}>{profile.description}</Text>
    </YStack>
  );
}
