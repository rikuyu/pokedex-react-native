export const statData = new Map<string, { label: string; color: string }>([
  ["hp", {label: "HP", color: "#00c72b"}],
  ["attack", {label: "こうげき", color: "#fc0000"}],
  ["speed", {label: "すばやさ", color: "#00cfe1"}],
  ["defense", {label: "ぼうぎょ", color: "#1d87ff"}],
  ["special-attack", {label: "とくこう", color: "#fa69ff"}],
  ["special-defense", {label: "とくぼう", color: "#fc9a49"}],
]);

export function getStatLabel(key: string): string {
  return statData.get(key)?.label ?? "unknown";
}

export function getStatColor(key: string): string {
  return statData.get(key)?.color ?? "#ffffff";
}
