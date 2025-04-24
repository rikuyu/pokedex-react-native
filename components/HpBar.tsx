import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HpBar() {
  const [width, setWidth] = useState(0);
  const hp = (width / 10) * (Math.floor(Math.random() * 10) + 1);
  let hpColor: string;
  switch (true) {
    case hp <= (width / 10) * 2:
      hpColor = "#e83030";
      break;
    case hp <= (width / 10) * 4:
      hpColor = "#ffc117";
      break;
    default:
      hpColor = "#17ff4c";
      break;
  }

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setWidth(layout.width);
      }}
    >
      <View style={[styles.hp, {width: hp, backgroundColor: hpColor}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 6,
    position: "relative",
    backgroundColor: "#edf3fc",
    borderColor: "#000000",
    borderWidth: 0.5,
  },
  hp: {
    height: 6,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
