import React, { useState } from "react";
import * as Location from "expo-location";
import { Text, View, XStack } from "tamagui";
import { MapPin } from "@tamagui/lucide-icons";

export default function Residence() {
  const [location, setLocation] = useState<string>("unknown");

  const getCurrentLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLocation("error");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const {latitude, longitude} = location.coords;
    const geocode = await Location.reverseGeocodeAsync({latitude, longitude});
    const {city, country} = geocode[0];
    setLocation(`${country}/${city}`);
  };

  return (
    <XStack
      ai={"center"}
      px={16}
      onPress={() => getCurrentLocation()}
      pressStyle={{o: 0.7}}
    >
      <MapPin size={"$1"} col={"$color"} strokeWidth={2}/>
      <View w={4}/>
      <Text fow={"normal"} fos={14}>{location}</Text>
    </XStack>
  );
}
