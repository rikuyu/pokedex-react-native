import React from "react";
import { Image } from "react-native";
import { getKeyByLabel } from "@/utils/typeData";

type Props = {
  type: string;
}

export default function TypeBadge({type}: Props) {
  const image = getTypeImageByKey(getKeyByLabel(type) ?? "unknown");

  return (
    <Image
      style={{
        width: 18,
        aspectRatio: 1,
        borderRadius: 4,
      }}
      source={image}
    />
  );
}

function getTypeImageByKey(key: string) {
  switch (key) {
    case "normal":
      return require("../assets/images/type_normal.png");
    case "fighting":
      return require("../assets/images/type_fighting.png");
    case "flying":
      return require("../assets/images/type_flying.png");
    case "poison":
      return require("../assets/images/type_poison.png");
    case "ground":
      return require("../assets/images/type_ground.png");
    case "rock":
      return require("../assets/images/type_rock.png");
    case "bug":
      return require("../assets/images/type_bug.png");
    case "ghost":
      return require("../assets/images/type_ghost.png");
    case "steel":
      return require("../assets/images/type_steel.png");
    case "fire":
      return require("../assets/images/type_fire.png");
    case "water":
      return require("../assets/images/type_water.png");
    case "grass":
      return require("../assets/images/type_grass.png");
    case "electric":
      return require("../assets/images/type_electric.png");
    case "psychic":
      return require("../assets/images/type_psychic.png");
    case "ice":
      return require("../assets/images/type_ice.png");
    case "dragon":
      return require("../assets/images/type_dragon.png");
    case "dark":
      return require("../assets/images/type_dark.png");
    case "fairy":
      return require("../assets/images/type_fairy.png");
    default:
      return undefined;
  }
}
