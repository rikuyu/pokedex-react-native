import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const ja = {
  stat: "種族値",
  birthDay: "誕生日",
  name: "なまえ",
  description: "せつめい",
  editBtn: "プロフィールを編集",
  editTitle: "プロフィールの編集",
  save: "保存",
};

const en = {
  stat: "Base Stats",
  birthDay: "Birthday",
  name: "Name",
  description: "Description",
  editBtn: "Edit Profile",
  editTitle: "Edit Profile",
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

export const isJa = i18n.locale === "ja";
