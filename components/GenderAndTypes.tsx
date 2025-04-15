import React from "react";
import GenderIcon from "@/components/GenderIcon";
import { StyleSheet, Text, View } from "react-native";
import TypeBadge from "@/components/TypeBadge";

type Props = {
  typeFirst: string;
  typeSecond: string | undefined;
};

export default function GenderAndTypes({typeFirst, typeSecond}: Props) {
  return (
    <View style={styles.rowContent}>
      <GenderIcon/>
      <Text style={styles.label}>/</Text>
      <View style={{width: 8}}/>
      <TypeBadge type={typeFirst}/>
      {typeSecond && (
        <>
          <View style={{width: 4}}/>
          <TypeBadge type={typeSecond}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
