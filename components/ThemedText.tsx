import { StyleSheet, TextProps, Text } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    "size12Normal" |
    "size12Medium" |
    "size12Bold" |
    "size14Normal" |
    "size14Medium" |
    "size14Bold" |
    "size16Normal" |
    "size16Medium" |
    "size16Bold" |
    "size20Normal" |
    "size20Medium" |
    "size20Bold",
};

export function ThemedText(
  {
    style,
    lightColor,
    darkColor,
    type = "size14Normal",
    ...otherProps
  }: ThemedTextProps,
) {
  const color = useThemeColor({light: lightColor, dark: darkColor}, "text");

  return (
    <Text
      style={[{color}, styles[type]]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  size12Normal: {
    fontSize: 12,
    fontWeight: "normal",
  },
  size12Medium: {
    fontSize: 12,
    fontWeight: "medium",
  },
  size12Bold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  size14Normal: {
    fontSize: 14,
    fontWeight: "normal",
  },
  size14Medium: {
    fontSize: 14,
    fontWeight: "medium",
  },
  size14Bold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  size16Normal: {
    fontSize: 16,
    fontWeight: "normal",
  },
  size16Medium: {
    fontSize: 16,
    fontWeight: "medium",
  },
  size16Bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  size20Normal: {
    fontSize: 20,
    fontWeight: "normal",
  },
  size20Medium: {
    fontSize: 20,
    fontWeight: "medium",
  },
  size20Bold: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
