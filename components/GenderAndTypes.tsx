import React from "react";
import GenderIcon from "@/components/GenderIcon";
import { StyleSheet } from "react-native";
import TypeBadge from "@/components/TypeBadge";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  typeFirst: string;
  typeSecond: string | undefined;
};

export default function GenderAndTypes({typeFirst, typeSecond}: Props) {
  return (
    <ThemedView style={styles.rowContent}>
      <GenderIcon/>
      <ThemedText type="size14Medium">/</ThemedText>
      <ThemedView style={{width: 8}}/>
      <TypeBadge type={typeFirst}/>
      {typeSecond && (
        <>
          <ThemedView style={{width: 4}}/>
          <TypeBadge type={typeSecond}/>
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
