export const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonListUrl = (offset: number, limit: number) =>
  `${POKEMON_URL}?offset=${offset}&limit=${limit}`;

export const getPokemonDotImage = (index: number | undefined) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index || 0}.png`;

export const getPokemonImage = (index: number | undefined) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index || 0}.png`;

export const getPokemonDetailUrl = (index: number) => `${POKEMON_URL}/${index}`;
