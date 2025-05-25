import { styled, Text, withStaticProperties, XStack } from "tamagui";
import { pokedexRed } from "@/constants/colors";

const DebugTitleFrame = styled(XStack, {
  name: "DebugTitle",
  ai: "center",
  jc: "flex-start",
  bg: "$background",
  py: 8,
  px: 20,
  w: "100%",
});

const DebugTitleText = styled(Text, {
  name: "DebugTitleText",
  fos: 12,
  fow: "bold",
  col: pokedexRed,
});

export const DebugTitle = withStaticProperties(DebugTitleFrame, {
  Text: DebugTitleText,
});
