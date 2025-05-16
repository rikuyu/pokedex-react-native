import { TypeColor } from "@/utils/typeData";

export type PokemonListResponseItem = {
  name: string;
}

export type PokemonListItem = PokemonListResponseItem & {
  index: number;
}

export type PokemonDetail = {
  index: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
}

export type PokemonStat = {
  name: string;
  status: number;
};

export type PokemonType = {
  name: string;
  color: TypeColor;
}

export type RawPokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type RawPokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
