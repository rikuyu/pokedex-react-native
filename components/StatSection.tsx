import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatItem from "@/components/StatItem";
import { getStatColor, getStatLabel } from "@/utils/statData";
import { PokemonStat } from "@/types/pokemon";

type Props = {
  stats: PokemonStat[];
}

export default function StatSection({ stats }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.statTitle}>種族値</Text>
      <View style={{height: 12}}/>
      {
        stats.flatMap((stat, index) => [
          <StatItem
            key={`stat-${index}`}
            label={getStatLabel(stat.name)}
            value={stat.status}
            color={getStatColor(stat.name)}/>,
          index !== stats.length - 1 && (
            <View key={`spacer-${index}`} style={{height: 20}}/>
          ),
        ])
      }
      <View style={{height: 20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 36,
    backgroundColor: "#edf3fc",
    paddingVertical: 12,
    marginHorizontal: 12,
    alignItems: "center",
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
})
