import React from "react";
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  iconImg: string | undefined;
  setIcon: () => void;
  headerImg: string | undefined;
  setHeader: () => void;
}

export default function EditHeaderSection({iconImg, setIcon, headerImg, setHeader}: Props) {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const imgStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  const header = headerImg ? {uri: headerImg} : require("../assets/images/header_placeholder.png");
  const icon = iconImg ? {uri: iconImg} : require("../assets/images/profile_image.png");

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        onPress={setHeader}
        activeOpacity={0.9}
        style={styles.headerTouchable}
      >
        <View style={styles.touchableContent}>
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
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={setIcon}
        activeOpacity={0.9}
        style={[styles.iconTouchable, {bottom: imageSize / 2}]}
      >
        <View style={styles.touchableContent}>
          <Image
            source={icon}
            resizeMode="cover"
            style={[styles.border, imgStyle]}
          />
          <ThemedView style={[styles.blurIcon, imgStyle]}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              color="#fff"
              size={28}
            />
          </ThemedView>
        </View>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    position: "relative",
  },
  headerTouchable: {
    ...StyleSheet.absoluteFillObject,
    height: 130,
    width: "100%",
  },
  touchableContent: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
  },
  blurHeader: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
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
  iconTouchable: {
    position: "absolute",
    left: 16,
  },
  border: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderColor: "#000",
  },
  blurIcon: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
  },
});
