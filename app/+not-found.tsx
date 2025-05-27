import { Stack } from "expo-router";
import { i18nText } from "@/utils/i18n";
import { Image, View } from "tamagui";
import React from "react";
import { isIos } from "@/utils/platform";
import IosBackButton from "@/components/IosBackButton";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{
        title: i18nText("notFound"),
        headerBackTitle: "",
        headerTintColor: "#ffffff",
        headerStyle: {backgroundColor: "#bc77ff"},
        headerLeft: () => isIos ? <IosBackButton iconColor={"white"}/> : null,
      }}/>
      <View f={1} bg={"#bc77ff"} ai={"center"} jc={"center"}>
        <Image w={160} h={160} source={require("../assets/images/not_found_image.jpeg")}/>
      </View>
    </>
  );
};
