import { isJa } from "@/utils/i18n";

export const typeData = new Map<string, { label: string; color: TypeColor }>([
  ["normal", { label: "ノーマル", color: "#d7d9d8" }],
  ["fighting", { label: "かくとう", color: "#bc1a1a" }],
  ["flying", { label: "ひこう", color: "#97b0e7" }],
  ["poison", { label: "どく", color: "#a040a0" }],
  ["ground", { label: "じめん", color: "#e0c068" }],
  ["rock", { label: "いわ", color: "#b8a038" }],
  ["bug", { label: "むし", color: "#a8b820" }],
  ["ghost", { label: "ゴースト", color: "#705898" }],
  ["steel", { label: "はがね", color: "#4d989e" }],
  ["fire", { label: "ほのお", color: "#ff8833" }],
  ["water", { label: "みず", color: "#47bafc" }],
  ["grass", { label: "くさ", color: "#78c850" }],
  ["electric", { label: "でんき", color: "#f8d030" }],
  ["psychic", { label: "エスパー", color: "#f85888" }],
  ["ice", { label: "こおり", color: "#9ef0f0" }],
  ["dragon", { label: "ドラゴン", color: "#066fb5" }],
  ["dark", { label: "あく", color: "#705848" }],
  ["fairy", { label: "フェアリー", color: "#ee99ac" }],
]);

export type TypeColor =
  | "#d7d9d8"
  | "#bc1a1a"
  | "#97b0e7"
  | "#a040a0"
  | "#e0c068"
  | "#b8a038"
  | "#a8b820"
  | "#705898"
  | "#4d989e"
  | "#ff8833"
  | "#47bafc"
  | "#78c850"
  | "#f8d030"
  | "#f85888"
  | "#9ef0f0"
  | "#066fb5"
  | "#705848"
  | "#ee99ac"
  | "#ffffff";

export function getTypeLabel(key: string): string {
  return isJa ? typeData.get(key)?.label ?? "unknown" : key;
}

export function getTypeColor(key: string): TypeColor {
  return typeData.get(key)?.color ?? "#ffffff";
}

export function getKeyByLabel(label: string): string | undefined {
  for (const [key, value] of typeData.entries()) {
    if (value.label === label) {
      return key;
    }
  }
  return undefined;
}

