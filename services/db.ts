import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { Alert } from "react-native";

export const DATABASE_NAME = "pokedex.db";

export const alertDBError = (error: Error) => {
  return Alert.alert(
    "DB Error",
    "Failed to initialize the database.",
    [
      {
        text: "OK",
        onPress: () => {
          console.log(error.name);
          console.log(error.message);
        },
      },
    ]);
};

export const bookmarkPokemon = sqliteTable("bookmark_pokemon_list", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  type_first: text("type_first").notNull(),
  type_second: text("type_second"),
});

export type PokemonBookmark = typeof bookmarkPokemon.$inferSelect;
