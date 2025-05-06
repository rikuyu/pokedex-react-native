import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const ja = {
  editBtn: "プロフィールを編集",
  stat: "種族値",
  birthDay: "誕生日",
  name: "なまえ",
  description: "せつめい",
  save: "保存",
};

const en = {
  editBtn: "Edit Profile",
  stat: "Base Stats",
  birthDay: "Birthday",
  name: "Name",
  description: "Description",
  save: "Save",
};

type TranslationKeys = keyof typeof ja;
type Translation = Record<TranslationKeys, string>;

const translations: Record<string, Translation> = {
  ja,
  en,
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;

export const i18nText = (key: TranslationKeys): string => i18n.t(key);
