import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { PokemonDetail } from "@/types/pokemon";
import { getColorIsLight } from "@/utils/getColorIsLight";
import Bookmark from "@/components/Bookmark";
import IosBackButton from "@/components/IosBackButton";
import { Platform } from "react-native";
import { headerStyle, pokedexRed } from "@/constants/colors";
import { isJa } from "@/utils/i18n";

export const usePokemonProfileHeader = (
  data: PokemonDetail | undefined,
  shouldSkip: boolean,
  isBookmarked: boolean,
  toggleBookmark: () => void,
) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (!data || shouldSkip) {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: "",
        headerStyle,
        headerTintColor: pokedexRed,
      });
    } else {
      const firstColor = data.types[0].color ?? "#ffffff";
      const contentColor = getColorIsLight(firstColor) ? "black" : "white";

      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: `${isJa ? "ポケモン図鑑" : "Pokedex"} No.${data.index}`,
        headerStyle: {
          backgroundColor: firstColor,
        },
        headerTintColor: contentColor,
        headerLeft: () => Platform.OS === "ios" ? <IosBackButton iconColor={contentColor}/> : null,
        headerRight: () => <Bookmark color={contentColor} isBookmarked={isBookmarked} onPress={toggleBookmark}/>,
      });
    }
  }, [data, shouldSkip, isBookmarked, toggleBookmark, navigation]);
};
