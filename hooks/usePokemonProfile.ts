import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "@/services/fetchPokemonDetail";

export const usePokemonProfile = (id: string | string[] | undefined) => {
  return useQuery({
    queryKey: [`pokemon_profile_${id}`],
    queryFn: () => fetchPokemonDetail(Number(id)),
    enabled: !!id,
  });
};
