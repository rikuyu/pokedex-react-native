import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFetch } from "@/hooks/useFetch";
import { PokemonDetail } from "@/types/pokemon";
import { fetchPokemonDetail } from "@/services/fetchPokemonDetail";
import { usePokemonProfileHeader } from "@/hooks/usePokemonHeaderEffect";
import { getPokemonImage } from "@/constants/endpoints";
import GradientOrSolidBackground from "@/components/GradientOrSolidBackground";
import PokemonProfileTitle from "@/components/PokemonProfileTitle";
import StatSection from "@/components/StatSection";
import TypeSection from "@/components/TypeSection";
import PhysicalSection from "@/components/PhysicalSection";
import { ThemedView } from "@/components/ThemedView";
import { pokedexRed } from "@/constants/colors";
import { ThemedText } from "@/components/ThemedText";

export default function PokemonProfile() {
  const {id} = useLocalSearchParams();

  const {
    data,
    isLoading,
    hasError,
  } = useFetch<PokemonDetail, number>(Number(id), fetchPokemonDetail);

  usePokemonProfileHeader(data, isLoading, isLoading);

  const {height} = useWindowDimensions();
  const imgSize = height / 6;

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large"/>
      </ThemedView>
    );
  }

  if (hasError) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Error</ThemedText>
      </ThemedView>
    );
  }

  return (
    <View style={styles.container}>
      <GradientOrSolidBackground colors={data?.types.map((type) => type.color)}>
        <Image
          style={{height: imgSize, width: imgSize}}
          source={{uri: getPokemonImage(data?.index)}}
          resizeMode="cover"
        />
      </GradientOrSolidBackground>
      <ThemedView lightColor={pokedexRed} darkColor={pokedexRed} style={{height: 12}}/>
      <PokemonProfileTitle title={data?.name}/>
      <ThemedView lightColor={pokedexRed} darkColor={pokedexRed} style={{height: 12}}/>
      <ThemedView lightColor={pokedexRed} darkColor={pokedexRed} style={{flex: 4, alignItems: "center"}}>
        <TypeSection types={data?.types}/>
        <ThemedView style={{height: 12}}/>
        <PhysicalSection height={data?.height} weight={data?.weight}/>
        <ThemedView style={{height: 16}}/>
        <StatSection stats={data?.stats}/>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: pokedexRed,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
