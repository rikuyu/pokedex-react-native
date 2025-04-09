import { PokemonListItem, PokemonListResponseItem } from "@/types/pokemon";
import { getPokemonListUrl } from "@/api/endpoints";
import { pokemonData } from "@/utils/pokemonData";

export const fetchPokemonList = async (offset: number, limit: number): Promise<PokemonListItem[]> => {
  const url = getPokemonListUrl(offset, limit);

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`(${res.status}): Failed to fetch Pokémon list`);
      }
      return res.json();
    })
    .then((data) => {
      const numberedList: PokemonListItem[] = data.results.map((
        item: PokemonListResponseItem,
        index: number,
      ) => ({
        index: offset + index + 1,
        name: pokemonData.get(item.name),
      }));
      return numberedList;
    })
    .catch((error) => {
      throw error;
    });
};
