import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as Location from "expo-location";

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
    <TouchableOpacity
      style={styles.container}
      onPress={() => getCurrentLocation()}
      activeOpacity={0.8}
    >
      <Ionicons name="location-outline" size={20} color={"#b1b1b1"}/>
      <View style={{width: 4}}/>
      <Text style={styles.text}>{location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: "#b1b1b1",
  },
});
