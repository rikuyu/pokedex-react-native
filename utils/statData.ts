import { isJa } from "@/utils/i18n";

export const statData = new Map<string, { labelJa: string; labelEn: string; color: string }>([
  ["hp", {labelJa: "HP", labelEn: "HP", color: "#00c72b"}],
  ["attack", {labelJa: "こうげき", labelEn: "Atk", color: "#fc0000"}],
  ["speed", {labelJa: "すばやさ", labelEn: "Spe", color: "#00cfe1"}],
  ["defense", {labelJa: "ぼうぎょ", labelEn: "Def", color: "#1d87ff"}],
  ["special-attack", {labelJa: "とくこう", labelEn: "SpA", color: "#fa69ff"}],
  ["special-defense", {labelJa: "とくぼう", labelEn: "SpD", color: "#fc9a49"}],
]);

export function getStatLabel(key: string): string {
  return (isJa ? statData.get(key)?.labelJa : statData.get(key)?.labelEn) ?? "unknown";
}

export function getStatColor(key: string): string {
  return statData.get(key)?.color ?? "#ffffff";
}
