import { useCallback, useState } from "react";
import { PokemonBookmark } from "@/types/pokemon";
import { getAllBookmarkPokemon } from "@/services/database";
import { useSQLiteContext } from "expo-sqlite";
import { useFocusEffect } from "expo-router";

export const useBookmarkPokemon = () => {
  const db = useSQLiteContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<PokemonBookmark[]>([]);

  const loadBookmarkedPokemon = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const result = await getAllBookmarkPokemon(db);
      setData(result);
    } catch (e) {
      console.log("Error:", e);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      void loadBookmarkedPokemon();
    }, [])
  );

  return {isLoading, hasError, data, loadBookmarkedPokemon};
};
