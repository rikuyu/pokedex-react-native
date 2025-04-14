export const typeData = new Map<string, { label: string; color: string }>([
  ["normal", { label: "ノーマル", color: "#d7d9d8" }],
  ["fighting", { label: "かくとう", color: "#fa4439" }],
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

export function getTypeLabel(key: string): string {
  return typeData.get(key)?.label ?? "unknown";
}

export function getTypeColor(key: string): string {
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

