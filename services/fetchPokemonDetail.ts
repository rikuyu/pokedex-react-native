import { getPokemonDetailUrl } from "@/api/endpoints";
import { PokemonDetail, PokemonStat, PokemonType, RawPokemonStat, RawPokemonType } from "@/types/pokemon";
import { getTypeColor, getTypeLabel } from "@/utils/typeData";
import { pokemonData } from "@/utils/pokemonData";

export const fetchPokemonDetail = async (index: number): Promise<PokemonDetail> => {
  const url = getPokemonDetailUrl(index);

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`(${res.status}): Failed to fetch Pokémon Detail`);
      }
      return res.json();
    })
    .then((data) => {
      const pokemonDetail: PokemonDetail = {
        index: data.id,
        name: pokemonData.get(data.name) ?? "unknown",
        height: data.height,
        weight: data.weight,
        types: data.types.map((v: RawPokemonType) => {
          const type: PokemonType = {
            name: getTypeLabel(v.type.name),
            color: getTypeColor(v.type.name),
          };
          return type;
        }),
        stats: data.stats.map((v: RawPokemonStat) => {
          const stat: PokemonStat = {
            name: v.stat.name,
            status: v.base_stat,
          };
          return stat;
        }),
      };
      return pokemonDetail;
    })
    .catch((error) => {
      throw error;
    });
};