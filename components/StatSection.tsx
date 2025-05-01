import React from "react";
import { StyleSheet } from "react-native";
import StatItem from "@/components/StatItem";
import { getStatColor, getStatLabel } from "@/utils/statData";
import { PokemonStat } from "@/types/pokemon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  stats: PokemonStat[] | undefined;
}

export default function StatSection({stats}: Props) {
  const safeStats = stats ?? [];
  return (
    <ThemedView style={styles.container}>
      <ThemedText type={"size16Medium"}>種族値</ThemedText>
      <ThemedView style={{height: 12}}/>
      {
        safeStats.flatMap((stat, index) => [
          <StatItem
            key={`stat-${index}`}
            label={getStatLabel(stat.name)}
            value={stat.status}
            color={getStatColor(stat.name)}/>,
          index !== safeStats.length - 1 && (
            <ThemedText key={`spacer-${index}`} style={{height: 20}}/>
          ),
        ])
      }
      <ThemedText style={{height: 20}}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    alignItems: "center",
  },
});
