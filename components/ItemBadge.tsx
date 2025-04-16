import React from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

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
    backgroundColor: "#dddd00",
  },
  middle: {
    flex: 1,
    backgroundColor: "#FF8000",
  },
  bottom: {
    flex: 1,
    backgroundColor: "#FFFF00",
  },
});
