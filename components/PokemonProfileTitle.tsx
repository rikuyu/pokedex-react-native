import React from "react";
import { Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { isJa } from "@/utils/i18n";
import { pokemonData } from "@/utils/pokemonData";

export default function PokemonProfileTitle({title}: { title: string | undefined }) {
  const safeTitle = title ?? "unknown";
  return (
    <ThemedView style={styles.container}>
      <MonsterBall/>
      <ThemedView style={{width: 12}}/>
      <ThemedText type={"size20Bold"} style={{fontFamily: "PKMN-REGULAR"}}>
        {isJa ? pokemonData.get(safeTitle) : safeTitle}
      </ThemedText>
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
