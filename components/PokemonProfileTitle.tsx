import React from "react";
import { Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  title: string | undefined;
}

export default function PokemonProfileTitle({title}: Props) {
  return (
    <ThemedView style={styles.container}>
      <MonsterBall/>
      <ThemedView style={{width: 12}}/>
      <ThemedText type={"size20Bold"} style={{fontFamily: "PKMN-REGULAR"}}>{title || "unknown"}</ThemedText>
      <ThemedView style={{width: 12}}/>
      <MonsterBall/>
    </ThemedView>
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
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
