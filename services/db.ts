import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const DATABASE_NAME = "pokedex.db";

export const bookmarkPokemon = sqliteTable("bookmark_pokemon_list", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  type_first: text("type_first").notNull(),
  type_second: text("type_second"),
});

export type PokemonBookmark = typeof bookmarkPokemon.$inferSelect;
