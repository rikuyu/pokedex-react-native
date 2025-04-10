export const getColorIsLight = (bgColor: string): boolean => {
  if (!/^#?[0-9a-fA-F]{6}$/.test(bgColor)) return true;

  const color = bgColor.startsWith("#") ? bgColor : `#${bgColor}`;

  const r = parseInt(color.slice(1, 3), 16) || 0;
  const g = parseInt(color.slice(3, 5), 16) || 0;
  const b = parseInt(color.slice(5, 7), 16) || 0;

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6;
};

