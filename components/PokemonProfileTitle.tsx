import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string | undefined;
}

export default function PokemonProfileTitle({title}: Props) {
  return (
    <View style={styles.container}>
      <MonsterBall/>
      <View style={{width: 12}}/>
      <Text style={styles.name}>{title || "unknown"}</Text>
      <View style={{width: 12}}/>
      <MonsterBall/>
    </View>
  );
}

function MonsterBall() {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require("../assets/images/monster_ball.png")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#edf3fc",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
