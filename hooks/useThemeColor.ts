import { useColorScheme } from "react-native";
import { Colors } from "@/constants/colors";

export function useThemeColor(
  props?: { light?: string; dark?: string },
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark,
): string {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props?.[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  if (colorName) {
    return Colors[theme][colorName];
  }

  throw new Error("props or colorName is required when color is not specified in props.");
}
