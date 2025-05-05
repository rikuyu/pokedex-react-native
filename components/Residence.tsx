import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Location from "expo-location";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Residence() {
  const iconColor = useThemeColor(undefined, "text");
  const backgroundColor = useThemeColor(undefined, "background");
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
    <Pressable
      style={({pressed}) => [
        styles.container, {
          backgroundColor,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      onPress={() => getCurrentLocation()}
    >
      <Ionicons name="location-outline" size={20} color={iconColor}/>
      <ThemedView style={{width: 4}}/>
      <ThemedText type="size14Normal">{location}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
