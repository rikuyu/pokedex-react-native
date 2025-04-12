import { SQLiteDatabase } from "expo-sqlite";
import { PokemonBookmark, PokemonDetail } from "@/types/pokemon";

export async function initDB(db: SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = 'wal';
    CREATE TABLE IF NOT EXISTS bookmark_pokemon (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      type_first TEXT NOT NULL,
      type_second TEXT
    );
  `);
}

export async function addPokemon(
  db: SQLiteDatabase,
  pokemon: PokemonDetail,
): Promise<void> {
  const id = pokemon.index;
  const name = pokemon.name;
  const typeFirst = pokemon.types[0].name;
  const typeSecond = pokemon.types[1]?.name ?? null;

  await db.runAsync(
    "INSERT INTO bookmark_pokemon (id, name, type_first, type_second) VALUES (?, ?, ?, ?);",
    id,
    name,
    typeFirst,
    typeSecond,
  );
}

export async function deletePokemon(
  db: SQLiteDatabase,
  pokemon: PokemonDetail,
): Promise<void> {
  await db.runAsync("DELETE FROM bookmark_pokemon WHERE id = ?;", pokemon.index);
}

export async function getAllBookmarkPokemon(
  db: SQLiteDatabase,
): Promise<PokemonBookmark[]> {
  return await db.getAllAsync<PokemonBookmark>(`
      SELECT id,
             name,
             type_first  AS typeFirst,
             type_second AS typeSecond
      FROM bookmark_pokemon;
  `);
}

export async function getIsPokemonBookmarked(
  db: SQLiteDatabase,
  id: number,
): Promise<boolean> {
  const row = await db.getFirstSync("SELECT 1 FROM bookmark_pokemon WHERE id = ?;", id);
  return row !== null;
}
