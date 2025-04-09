export const getColorIsLight = (bgColor: string): boolean => {
  // RGB形式に変換（#RRGGBB前提）
  const r = parseInt(bgColor.substring(1, 3), 16);
  const g = parseInt(bgColor.substring(3, 5), 16);
  const b = parseInt(bgColor.substring(5, 7), 16);

  // 相対輝度を計算（sRGB）
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6;
};
