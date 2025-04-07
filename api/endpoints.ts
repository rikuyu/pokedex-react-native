export const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonListUrl = (offset: number, limit: number) =>
  `${POKEMON_URL}?offset=${offset}&limit=${limit}`;

export const getPokemonImage = (index: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

export const getPokemonDetailUrl = (index: number) =>
  `https://pokeapi.co/api/v2/pokemon-species/${index}`;
