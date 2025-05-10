import { PokemonListItem, PokemonListResponseItem } from "@/types/pokemon";
import { getPokemonListUrl } from "@/constants/endpoints";

export const fetchPokedex = async (
  offset: number = 0,
  limit: number = 20
): Promise<PokemonListItem[]> => {
  const url = getPokemonListUrl(offset, limit);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`(${res.status}): Failed to fetch Pokémon list`);

  const data = await res.json();
  return data.results.map((item: PokemonListResponseItem, index: number) => ({
    index: offset + index + 1,
    name: item.name,
  }));
};
