import React, { useMemo } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import StatItem from "@/components/StatItem";
import { getStatColor, getStatLabel } from "@/utils/statData";
import { PokemonStat } from "@/types/pokemon";

type Props = {
  stats: PokemonStat[] | undefined;
}

export default function StatSection({stats}: Props) {
  const safeStats = stats ?? [];
  return (
    <View style={styles.container}>
      <Text style={styles.statTitle}>種族値</Text>
      <View style={{height: 12}}/>
      {
        safeStats.flatMap((stat, index) => [
          <StatItem
            key={`stat-${index}`}
            label={getStatLabel(stat.name)}
            value={stat.status}
            color={getStatColor(stat.name)}/>,
          index !== safeStats.length - 1 && (
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
    paddingHorizontal: 20,
    marginHorizontal: 12,
    alignItems: "center",
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
