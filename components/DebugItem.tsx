import { styled, Text, withStaticProperties, XStack } from "tamagui";

const DebugItemFrame = styled(XStack, {
  name: "DebugItem",
  ai: "center",
  jc: "flex-start",
  bbw: 1,
  boc: "$color",
  bg: "$background",
  py: 12,
  px: 20,
  w: "100%",
});

const DebugItemText = styled(Text, {
  name: "DebugItemText",
  fos: 14,
  col: "$color",
});

export const DebugItem = withStaticProperties(DebugItemFrame, {
  Text: DebugItemText,
});
