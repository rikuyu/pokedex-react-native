import { styled, Text, withStaticProperties, XStack } from "tamagui";

const DebugItemFrame = styled(XStack, {
  name: "DebugItem",
  ai: "center",
  jc: "flex-start",
  bg: "$background",
  py: 12,
  px: 16,
  w: "100%",

  variants: {
    bordered: {
      true: {
        bbw: 1,
        boc: "$color",
      },
      false: {
        bbw: 0,
      },
    },
  } as const,

  defaultVariants: {
    bordered: false,
  },
});

const DebugItemText = styled(Text, {
  name: "DebugItemText",
  fos: 14,
  col: "$color",
});

export const DebugItem = withStaticProperties(DebugItemFrame, {
  Text: DebugItemText,
});
