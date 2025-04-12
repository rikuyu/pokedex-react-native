import { useCallback, useEffect, useMemo } from "react";
import { useNavigation } from "expo-router";
import { PokemonDetail } from "@/types/pokemon";
import { getColorIsLight } from "@/utils/getColorIsLight";
import Bookmark from "@/components/Bookmark";
import BackButton from "@/components/BackButton";

export const usePokemonHeaderOptions = (
  data: PokemonDetail | null,
  isLoading: boolean,
  hasError: boolean,
) => {
  const navigation = useNavigation();

  const firstColor = data?.types[0].color ?? "fff";
  const contentColor = useMemo(() => getColorIsLight(firstColor) ? "black" : "white", [firstColor]);

  const headerRight = useCallback(() => {
    return (
      <Bookmark
        color={contentColor}
        onPress={() => console.log("bookmark")}
      />
    );
  }, [contentColor]);

  useEffect(() => {
    if (isLoading || hasError || !data) {
      navigation.setOptions({
        headerShown: true,
        title: "",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "transparent",
        headerShadowVisible: false,
      });
    } else {
      navigation.setOptions({
        headerShown: true,
        title: `ポケモン図鑑 #${data?.index ?? -1}`,
        headerStyle: {
          backgroundColor: firstColor,
        },
        headerTintColor: contentColor,
        headerShadowVisible: false,
        headerLeft: () => <BackButton iconColor={contentColor}/>,
        headerRight: headerRight,
      });
    }
  }, [data, isLoading, hasError, firstColor, contentColor, navigation]);
};
