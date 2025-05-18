import React, { useEffect, useMemo } from "react";
import { Animated, Easing, useAnimatedValue, useWindowDimensions } from "react-native";
import { Text, View, XStack, ZStack } from "tamagui";

type Props = {
  label: string;
  value: number;
  color: string;
}

export default function StatItem({label, value, color}: Props) {
  const scaleAnim = useAnimatedValue(0);
  const {width} = useWindowDimensions();
  const space = 8;
  const padding = 20;
  const barUnit = useMemo(() => {
    const flexUnit = (width - padding * 2 - space) / 5;
    const barWidth = flexUnit * 4;
    return barWidth / 200;
  }, [width]);

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: barUnit * value,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
      delay: 100,
    }).start();
  }, [value, barUnit, scaleAnim]);

  return (
    <XStack w={"100%"} jc={"center"}>
      <View f={1} als={"center"}>
        <Text als={"center"} fos={16} fow={"400"} numberOfLines={1} ellipsizeMode="tail">
          {label}
        </Text>
      </View>
      <View w={8}/>
      <ZStack f={4} bg={"$statBar"} h={24} br={50} ov={"hidden"} jc={"center"} ai={"center"}>
        <Animated.View
          style={[{
            backgroundColor: color,
            transform: [{scaleX: scaleAnim}],
            transformOrigin: "left",
            flex: 4,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 1,
          }]}
        />
        <View jc={"center"} ai={"flex-start"} t={0} b={0} pos={"absolute"}>
          <Text ml={8} fow={"bold"} col={"white"}>{value}</Text>
        </View>
      </ZStack>
    </XStack>
  );
}
