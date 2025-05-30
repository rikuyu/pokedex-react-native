import React, { useRef } from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import { View, YStack } from "tamagui";
import LottieView from "lottie-react-native";

export default function DebugLottieSection() {
  const animRef = useRef<LottieView>(null);

  const handlePress = () => {
    animRef.current?.play();
  };

  return (
    <YStack onPress={handlePress}>
      <DebugTitle>
        <DebugTitle.Text>Lottie</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>Play Animation</DebugItem.Text>
        <View f={1}/>
        <LottieView
          ref={animRef}
          source={require("../assets/lottie/cracker.json")}
          autoPlay={false}
          loop={false}
          style={{height: 24, aspectRatio: 1}}
        />
      </DebugItem>
    </YStack>
  );
}
