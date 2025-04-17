import React from "react";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
  positionStyle: ViewStyle;
}

export default function EditHeaderSection({positionStyle}: Props) {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const profileIconImageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    bottom: -imageSize / 2,
  };

  return (
    <View style={[styles.headerContainer, positionStyle]}>
      <Image
        source={require("../assets/images/pokedex_header.png")}
        style={[styles.headerImage]}
        resizeMode="cover"
      />
      <View style={styles.blurHeaderContainer}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          color="#fff"
          size={36}
        />
      </View>
      <Image
        source={require("../assets/images/profile_image.png")}
        resizeMode="cover"
        style={[styles.imagePosition, profileIconImageStyle]}
      />
      <View style={[styles.blurProfileIconContainer, profileIconImageStyle]}>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          color="#fff"
          size={28}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 130,
    position: "relative",
  },
  headerImageBlur: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    height: 130,
    width: "100%",
  },
  blurHeaderContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 130,
    width: "100%",
    backgroundColor: "#0000004D",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePosition: {
    position: "absolute",
    left: 16,
    borderWidth: 2,
    borderColor: "#000",
  },
  blurProfileIconContainer: {
    position: "absolute",
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
  },
});
