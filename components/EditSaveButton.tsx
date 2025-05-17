import React from "react";
import { Text, View } from "tamagui";
import { i18nText } from "@/utils/i18n";

export default function EditSaveButton({onPress}: { onPress: () => void }) {
  return (
    <View ai={"center"} jc={"center"} mt={12} mb={40}>
      <View onPress={onPress} bg={"$pokedexRed"} mx={12} py={12} w={"90%"} jc={"center"} ai={"center"} br={8}>
        <Text col={"white"} fow={"bold"}>{i18nText("save")}</Text>
      </View>
    </View>
  );
}
