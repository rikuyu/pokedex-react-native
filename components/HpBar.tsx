import React, { useState } from "react";
import { View } from "tamagui";

export default function HpBar() {
  const [width, setWidth] = useState(0);
  const hp = (width / 10) * (Math.floor(Math.random() * 10) + 1);
  let hpColor: "$hpRed" | "$hpOrange" | "$hpGreen";
  switch (true) {
    case hp <= (width / 10) * 2:
      hpColor = "$hpRed";
      break;
    case hp <= (width / 10) * 4:
      hpColor = "$hpOrange";
      break;
    default:
      hpColor = "$hpGreen";
      break;
  }

  return (
    <View
      h={6}
      w={"100%"}
      bw={0.5}
      boc={"#000000"}
      bg={"#edf3fc"}
      pos={"relative"}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setWidth(layout.width);
      }}
    >
      <View h={6} w={hp} pos={"absolute"} t={0} l={0} bg={hpColor}/>
    </View>
  );
}
