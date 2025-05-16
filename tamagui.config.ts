import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, createTokens } from "tamagui";
import { tokens } from "@tamagui/themes";
import { shorthands } from "@tamagui/shorthands";

const customTokens = createTokens({
  ...tokens,
  color: {
    pokedexRed: "#ff4545",
    hpGreen: "#17ff4c",
    hpOrange: "#ffc117",
    hpRed: "#e83030",
    itemBadgeYellow: "#ffff00",
    itemBadgeOrange: "#ff8000",
    maleBlue: "#68abfc",
    femalePink: "#fcacac",
  },
});

const customShorthands = {
  ...shorthands,
  ai: "alignItems",
  jc: "justifyContent",
  bg: "backgroundColor",
  br: "borderRadius",
  ar: "aspectRatio",
} as const;

const sharedColors = {
  pokedexRed: customTokens.color.pokedexRed,
  hpGreen: customTokens.color.hpGreen,
  hpOrange: customTokens.color.hpOrange,
  hpRed: customTokens.color.hpRed,
  itemBadgeYellow: customTokens.color.itemBadgeYellow,
  itemBadgeOrange: customTokens.color.itemBadgeOrange,
  maleBlue: customTokens.color.maleBlue,
  femalePink: customTokens.color.femalePink,
};

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  customTokens,
  themes: {
    light: {
      background: "#edf3fc",
      color: "#1a1a1a",
      ...sharedColors,
    },
    dark: {
      background: "#2c2c2c",
      color: "#fafafa",
      ...sharedColors,
    },
  },
  shorthands: customShorthands,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {
  }
}
