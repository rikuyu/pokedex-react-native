import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const ja = {
  bookmarkEmptyBtnLabel: "ポケモン図鑑を見る",
  bookmarkEmptyTitle: "ブックマークはありません",
  stat: "種族値",
  birthDay: "誕生日",
  name: "なまえ",
  description: "せつめい",
  editBtn: "プロフィールを編集",
  editTitle: "プロフィールの編集",
  editErrorTitle: "エラー",
  editErrorMsg: "名前と説明は必須です",
  save: "保存",
  setting: "設定",
  quickActionSearchTitle: "キモリに会う",
  quickActionSearchSubTitle: "キモリの詳細ページ",
  quickActionProfileTitle: "プロフィール",
  quickActionProfileSubTitle: "プロフィールを見る",
  batteryLevel: "バッテリー残量",
  notFound: "ページが見つかりません",
};

const en = {
  bookmarkEmptyBtnLabel: "View Pokedex",
  bookmarkEmptyTitle: "No bookmarks found",
  stat: "Base Stats",
  birthDay: "Birthday",
  name: "Name",
  description: "Description",
  editBtn: "Edit Profile",
  editTitle: "Edit Profile",
  editErrorTitle: "Error",
  editErrorMsg: "Name and description are required",
  save: "Save",
  setting: "Settings",
  quickActionSearchTitle: "Meet Treecko",
  quickActionSearchSubTitle: "Open Treecko's profile page",
  quickActionProfileTitle: "Profile",
  quickActionProfileSubTitle: "Open Profile",
  batteryLevel: "Current Battery Level",
  notFound: "Not Found Page",
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
