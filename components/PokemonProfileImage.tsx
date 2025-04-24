import React from "react";
import { Image } from "react-native";

type Props = {
  imgSize: number;
  url: string;
}

export default function PokemonProfileImage({imgSize, url}: Props) {
  return (
    <Image
      style={{height: imgSize, width: imgSize}}
      source={{uri: url}}
      resizeMode="cover"
    />
  );
}
