import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { PokemonDetail } from "@/types/pokemon";
import { getColorIsLight } from "@/utils/getColorIsLight";
import Bookmark from "@/components/Bookmark";
import IosBackButton from "@/components/IosBackButton";
import { useSQLiteContext } from "expo-sqlite";
import { addPokemon, deletePokemon, getIsPokemonBookmarked } from "@/services/database";
import { Platform } from "react-native";
import { headerStyle, pokedexRed } from "@/constants/colors";

export const usePokemonProfileHeader = (
  data: PokemonDetail | undefined,
  shouldSkip: boolean,
  isBookmarked: boolean,
  toggleBookmark: () => void,
) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!data || shouldSkip) {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: "",
        headerStyle,
        headerTintColor: pokedexRed,
      });
    } else {
      const firstColor = data.types[0].color ?? "#fff";
      const contentColor = getColorIsLight(firstColor) ? "black" : "white";

      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: `ポケモン図鑑 No.${data.index}`,
        headerStyle: {
          backgroundColor: firstColor,
        },
        headerTintColor: contentColor,
        headerLeft: () => Platform.OS === "ios" ? <IosBackButton iconColor={contentColor}/> : null,
        headerRight: () => <Bookmark color={contentColor} isBookmarked={isBookmarked} onPress={toggleBookmark}/>,
      });
    }
    ;
  }, [data, shouldSkip, isBookmarked, toggleBookmark, navigation]);
};


export const useBookmarkState = (data?: PokemonDetail) => {
  const db = useSQLiteContext();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!data) return;
    let isMounted = true;

    getIsPokemonBookmarked(db, data.index)
      .then((result) => {
        if (isMounted) setIsBookmarked(result);
      })
      .catch(console.log);

    return () => {
      isMounted = false;
    };
  }, [data?.index, db]);

  const toggleBookmark = useCallback(async () => {
    if (!data) return;
    const action = isBookmarked ? deletePokemon : addPokemon;

    try {
      await action(db, data);
      setIsBookmarked((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  }, [db, data, isBookmarked]);

  return {isBookmarked, toggleBookmark};
};

