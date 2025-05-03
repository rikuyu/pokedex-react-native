import { AsyncStorage } from "expo-sqlite/kv-store";

const key = "pokedex-profile";

export type Profile = {
  name: string;
  description: string;
}

const defaultProfile: Profile = {
  name: "unknown",
  description: "no description",
};

export const emptyProfile: Profile = {
  name: "",
  description: "",
};

export const getMyProfile = async (): Promise<Profile> => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : defaultProfile;
};

export const saveMyProfile = async (value: Profile): Promise<boolean> => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
  return true;
};
