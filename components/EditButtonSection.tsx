import React from "react";
import { i18nText } from "@/utils/i18n";
import { Text, View, XStack } from "tamagui";

type Props = {
  height: number;
  onPress: () => void;
}

export default function EditButtonSection({height, onPress}: Props) {
  return (
    <XStack h={height + 16}>
      <View f={1}/>
      <View
        onPress={onPress}
        pressStyle={{o: 0.5}}
        br={1000_000}
        als={"center"}
        py={4}
        px={12}
        bw={1}
        boc={"$color"}
        mr={8}
      >
        <Text fos={16} fow={"400"}>{i18nText("editBtn")}</Text>
      </View>
    </XStack>
  );
};
