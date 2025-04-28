import React from "react";
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  iconImg?: string;
  setIcon: () => void;
  headerImg?: string;
  setHeader: () => void;
}

export default function EditHeaderSection({iconImg, setIcon, headerImg, setHeader}: Props) {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const profileIconImageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    bottom: -imageSize / 2,
  };

  const header = headerImg ? {uri: headerImg} : require("../assets/images/header_placeholder.png");
  const icon = iconImg ? {uri: iconImg} : require("../assets/images/profile_image.png");

  return (
    <ThemedView style={styles.container}>
      <Image
        source={header}
        style={[styles.headerImage]}
        resizeMode="cover"
      />
      <ThemedView style={styles.blurHeader}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          color="#fff"
          size={32}
        />
      </ThemedView>
      <ThemeToggleButton positionStyle={styles.themeBtn}/>
      <Image
        source={icon}
        resizeMode="cover"
        style={[styles.border, profileIconImageStyle]}
      />
      <ThemedView style={[styles.blurIcon, profileIconImageStyle]}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          color="#fff"
          size={28}
        />
      </ThemedView>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    position: "relative",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    height: 130,
    width: "100%",
  },
  blurHeader: {
    ...StyleSheet.absoluteFillObject,
    height: 130,
    width: "100%",
    backgroundColor: "#0000004D",
    justifyContent: "center",
    alignItems: "center",
  },
  themeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  border: {
    position: "absolute",
    left: 16,
    borderWidth: 2,
    borderColor: "#000",
  },
  blurIcon: {
    position: "absolute",
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
  },
});
