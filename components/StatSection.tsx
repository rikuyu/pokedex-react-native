import React from "react";
import StatItem from "@/components/StatItem";
import { getStatColor, getStatLabel } from "@/utils/statData";
import { PokemonStat } from "@/types/pokemon";
import { i18nText } from "@/utils/i18n";
import { Text, View, YStack } from "tamagui";

export default function StatSection({stats}: { stats: PokemonStat[] | undefined }) {
  const safeStats = stats ?? [];
  return (
    <YStack bg={"$background"} br={36} py={12} px={20} mx={12} ac={"center"}>
      <Text fos={16} fow={"500"} als={"center"}>{i18nText("stat")}</Text>
      <View h={12}/>
      {
        safeStats.flatMap((stat, index) => [
          <StatItem
            key={`stat-${index}`}
            label={getStatLabel(stat.name)}
            value={stat.status}
            color={getStatColor(stat.name)}
          />,
          index !== safeStats.length - 1 && <View key={`spacer-${index}`} style={{height: 20}}/>,
        ])
      }
      <View h={20}/>
    </YStack>
  );
}
