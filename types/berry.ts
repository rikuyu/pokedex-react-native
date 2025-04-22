export type BerryListItem = {
  flavor_text_entries: FlavorTextType[];
  names: NameType[]
  sprites: ImageType;
};

export type FlavorTextType = {
  language: LanguageType,
  text: string;
}

export type LanguageType = {
  name: string,
}

export type NameType = {
  language: LanguageType,
  name: string;
};

export type ImageType = {
  default: string;
}

export type BerryData = {
  name: string;
  description: string;
  image: string;
}
