import { SQLiteDatabase } from "expo-sqlite";
import { PokemonBookmark, PokemonDetail } from "@/types/pokemon";

async function initDb(db: SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = 'wal';
    CREATE TABLE IF NOT EXISTS bookmark_pokemon (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      type_first TEXT NOT NULL,
      type_second TEXT,
    );
  `);
}

async function addPokemon(db: SQLiteDatabase, pokemon: PokemonDetail): Promise<void> {
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

async function deletePokemon(db: SQLiteDatabase, id: number): Promise<void> {
  await db.runAsync("DELETE FROM bookmark_pokemon WHERE id = ?;", id);
}

async function getAllBookmarkedPokemon(db: SQLiteDatabase): Promise<PokemonBookmark[]> {
  return await db.getAllAsync<PokemonBookmark>("SELECT * FROM bookmark_pokemon;");
}

async function getIsPokemonBookmarked(db: SQLiteDatabase, id: number): Promise<boolean> {
  const row = await db.getFirstSync("SELECT 1 FROM bookmark_pokemon WHERE id = ?;", id);
  return row !== undefined;
}
