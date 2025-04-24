import { Colors } from "@/constants/colors";
import { useAppTheme } from "@/utils/ThemeContext";

export function useThemeColor(
  props?: { light?: string; dark?: string },
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark,
): string {
  const { theme } = useAppTheme();
  const colorFromProps = props?.[theme];

  if (colorFromProps) return colorFromProps;
  if (colorName) return Colors[theme][colorName];

  throw new Error("props or colorName is required.");
}
