import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFetch } from "@/hooks/useFetch";
import { PokemonDetail } from "@/types/pokemon";
import { fetchPokemonDetail } from "@/services/fetchPokemonDetail";

export default function PokemonProfile() {
  const {id} = useLocalSearchParams();

  const {
    data,
    isLoading,
    hasError,
  } = useFetch<PokemonDetail, number>(Number(id), fetchPokemonDetail);

  console.log(data);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (hasError) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{data?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
