export const getColorIsLight = (bgColor: string): boolean => {
  if (!/^#?[0-9a-fA-F]{6}$/.test(bgColor)) return true;

  const color = bgColor.startsWith("#") ? bgColor : `#${bgColor}`;

  const red = parseInt(color.slice(1, 3), 16) || 0;
  const green = parseInt(color.slice(3, 5), 16) || 0;
  const blue = parseInt(color.slice(5, 7), 16) || 0;

  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance > 0.8;
};

