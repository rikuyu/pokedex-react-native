import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { PokemonDetail } from "@/types/pokemon";
import { getColorIsLight } from "@/utils/getColorIsLight";
import Bookmark from "@/components/Bookmark";
import BackButton from "@/components/BackButton";
import { awaitExpression } from "@babel/types";
import { useSQLiteContext } from "expo-sqlite";
import { addPokemon, deletePokemon, getIsPokemonBookmarked } from "@/services/database";

export const usePokemonProfileHeader = (
  data: PokemonDetail | null,
  isLoading: boolean,
  hasError: boolean,
) => {
  const navigation = useNavigation();

  const firstColor = data?.types[0].color ?? "fff";
  const contentColor = useMemo(() => getColorIsLight(firstColor) ? "black" : "white", [firstColor]);

  const db = useSQLiteContext();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = useCallback(async () => {
    if (!data) return;
    const action = isBookmarked ? deletePokemon : addPokemon;
    const actionName = isBookmarked ? "deleted" : "inserted";

    try {
      await action(db, data);
      console.log(`[${data.name}] ${actionName} successfully`);
      setIsBookmarked((prev) => !prev);
    } catch (e) {
      console.log(`Error while ${actionName}:`, e);
    }
  }, [data, db, isBookmarked]);

  useEffect(() => {
    let isMounted = true;

    const checkBookmark = async () => {
      if (!data) return;
      try {
        const result = await getIsPokemonBookmarked(db, data.index);
        if (isMounted) {
          setIsBookmarked(result);
        }
      } catch (e) {
        console.log("Error", e);
      }
    };

    checkBookmark();

    return () => {
      isMounted = false;
    };
  }, [data?.index, db]);

  const headerRight = () => (
    <Bookmark
      color={contentColor}
      isBookmarked={isBookmarked}
      onPress={toggleBookmark}
    />
  );

  const updateNavigationOptions = useCallback(() => {
    if (isLoading || hasError || !data) {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: "",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "transparent",
      });
    } else {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        title: `ポケモン図鑑 No.${data?.index ?? -1}`,
        headerStyle: {
          backgroundColor: firstColor,
        },
        headerTintColor: contentColor,
        headerLeft: () => <BackButton iconColor={contentColor}/>,
        headerRight: headerRight,
      });
    }
  }, [data, isLoading, hasError, firstColor, contentColor, navigation, isBookmarked]);

  useEffect(() => {
    updateNavigationOptions();
  }, [updateNavigationOptions]);
};
