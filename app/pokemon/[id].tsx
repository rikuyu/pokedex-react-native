import React from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { usePokemonProfileHeader } from "@/hooks/usePokemonHeaderEffect";
import { getPokemonImage } from "@/constants/endpoints";
import GradientOrSolidBackground from "@/components/GradientOrSolidBackground";
import PokemonProfileTitle from "@/components/PokemonProfileTitle";
import StatSection from "@/components/StatSection";
import TypeSection from "@/components/TypeSection";
import PhysicalSection from "@/components/PhysicalSection";
import PokemonProfileImage from "@/components/PokemonProfileImage";
import { usePokemonProfile } from "@/hooks/usePokemonProfile";
import { useBookmarkState } from "@/hooks/useDrizzleClient";
import { Text, View, YStack } from "tamagui";

export default function PokemonProfile() {
  const {id} = useLocalSearchParams();
  const {data, isLoading, isError} = usePokemonProfile(id);
  const {isBookmarked, toggleBookmark} = useBookmarkState(data);
  usePokemonProfileHeader(data, isLoading || isError, isBookmarked, toggleBookmark);

  const {height} = useWindowDimensions();
  const imgSize = height / 6;

  if (!id) {
    return (
      <View ac={"center"} jc={"center"}>
        <Text>IDが見つかりません</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View ac={"center"} jc={"center"}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (isError) {
    return (
      <View ac={"center"} jc={"center"}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <YStack f={1} ac={"center"} jc={"center"} bg={"$pokedexRed"}>
      <GradientOrSolidBackground colors={data?.types.map((type) => type.color)}>
        <PokemonProfileImage imgSize={imgSize} url={getPokemonImage(data?.index)}/>
      </GradientOrSolidBackground>
      <View h={12}/>
      <PokemonProfileTitle title={data?.name}/>
      <View h={12}/>
      <View ai={"center"} f={4}>
        <TypeSection types={data?.types}/>
        <View h={12}/>
        <PhysicalSection height={data?.height} weight={data?.weight}/>
        <View h={16}/>
        <StatSection stats={data?.stats}/>
      </View>
    </YStack>
  );
}

