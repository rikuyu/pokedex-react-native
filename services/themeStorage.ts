import { AsyncStorage } from "expo-sqlite/kv-store";

const key = "pokedex-theme";

export type Theme = "light" | "dark";

export const getTheme = async (): Promise<Theme> => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : "light";
};

export const saveTheme = async (value: Theme): Promise<Theme> => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
  return "light";
};
