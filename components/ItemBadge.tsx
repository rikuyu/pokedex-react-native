import React from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { itemBadgeOrange, itemBadgeYellow } from "@/constants/colors";

type Props = {
  style: StyleProp<ViewStyle>
}

export default function ItemBadge({style}: Props) {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.top}/>
      <View style={styles.middle}/>
      <View style={styles.bottom}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 8,
    height: 12,
    borderColor: "#808080",
    borderWidth: 0.5,
  },
  top: {
    flex: 1,
    backgroundColor: itemBadgeYellow,
  },
  middle: {
    flex: 1,
    backgroundColor: itemBadgeOrange,
  },
  bottom: {
    flex: 1,
    backgroundColor: itemBadgeYellow,
  },
});
