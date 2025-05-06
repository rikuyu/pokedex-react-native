import { useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { bookmarkPokemon, PokemonBookmark } from "@/services/db";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { eq } from "drizzle-orm";
import { PokemonDetail } from "@/types/pokemon";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export const useDrizzleClient = () => {
  const db = useSQLiteContext();
  return drizzle(db, {schema: {bookmarkPokemon}});
};

export const useBookmarkPokemon = () => {
  const drizzle = useDrizzleClient();

  const query = useQuery({
    queryKey: ["bookmark_pokemon"],
    queryFn: async (): Promise<PokemonBookmark[]> => await drizzle.query.bookmarkPokemon.findMany(),
    enabled: false,
  });

  useFocusEffect(
    useCallback(() => {
      void query.refetch();
    }, [query.refetch]),
  );

  return query;
};

export const useBookmarkState = (data?: PokemonDetail) => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, {schema: {bookmarkPokemon}});
  const queryClient = useQueryClient();

  const {data: isBookmarked = false} = useQuery({
    queryKey: [`bookmark_state_${data?.index}`],
    queryFn: async () => {
      const rows = await drizzleDb
        .select()
        .from(bookmarkPokemon)
        .where(eq(bookmarkPokemon.id, data!.index));
      return rows.length === 1;
    },
    enabled: !!data,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      if (!data) return;

      if (isBookmarked) {
        await drizzleDb
          .delete(bookmarkPokemon)
          .where(eq(bookmarkPokemon.id, data.index));
      } else {
        await drizzleDb.insert(bookmarkPokemon).values({
          id: data.index,
          name: data.name,
          type_first: data.types[0].name,
          type_second: data.types[1]?.name ?? null,
        });
      }
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({queryKey: [`bookmark_state_${data?.index}`]});
    },
  });

  return {
    isBookmarked,
    toggleBookmark: mutation.mutateAsync,
  };
};
