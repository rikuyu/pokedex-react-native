export const statData = new Map<string, { label: string; color: string }>([
  ["hp", {label: "HP", color: "#00c72b"}],
  ["attack", {label: "こうげき", color: "#fc0000"}],
  ["speed", {label: "すばやさ", color: "#75ebf0"}],
  ["defense", {label: "ぼうぎょ", color: "#0093fc"}],
  ["special-attack", {label: "とくこう", color: "#f649fc"}],
  ["special-defense", {label: "とくぼう", color: "#fc9a49"}],
]);

export function getStatLabel(key: string): string {
  return statData.get(key)?.label ?? "unknown";
}

export function getStatColor(key: string): string {
  return statData.get(key)?.color ?? "#ffffff";
}
