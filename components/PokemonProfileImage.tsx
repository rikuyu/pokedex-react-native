import React from "react";
import { Image } from "tamagui";

type Props = {
  imgSize: number;
  url: string;
}

export default function PokemonProfileImage({imgSize, url}: Props) {
  return <Image h={imgSize} w={imgSize} source={{uri: url}} objectFit="cover"/>;
}
