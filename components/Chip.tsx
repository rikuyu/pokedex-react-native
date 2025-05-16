import { styled, View, Text, withStaticProperties } from "tamagui";

const ChipFrame = styled(View, {
  name: "Chip",
  ai: "center",
  jc: "center",
  br: 1000_000_000,
  w: 90,
  h: 32,
});

const ChipText = styled(Text, {
  name: "ChipText",
  fow: "bold",
  fos: 16,
});

export const Chip = withStaticProperties(ChipFrame, {
  Text: ChipText,
});
