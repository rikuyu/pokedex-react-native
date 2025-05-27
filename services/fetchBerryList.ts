import { getBerryListUrl } from "@/constants/endpoints";
import { BerryData, BerryListItem, FlavorTextType, NameType } from "@/types/berry";

export const fetchBerryList = async (): Promise<BerryData[]> => {
  const url = getBerryListUrl();

  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch berry url list");
      return res.json();
    })
    .then((json) => {
      const urls = json.results.map((item: { url: string }) => item.url);

      return Promise.all(
        urls.map((url: string) =>
          fetch(url)
            .then((res) => {
              if (!res.ok) throw new Error(`Failed to fetch: ${url}`);
              return res.json();
            })
            .then((data): BerryListItem => ({
                flavor_text_entries: data.flavor_text_entries,
                names: data.names,
                sprites: data.sprites,
              }
            ))
            .catch((err) => {
              console.error("Error fetching detail:", err);
              return null;
            }),
        ),
      );
    })
    .then((berries) => {
      const validBerries = berries.filter((b: BerryListItem | null) => b !== null);
      const result: BerryData[] = validBerries.map((berry: BerryListItem) => ({
        name: berry.names.find((b: NameType) => b.language.name === "ja")?.name ?? "",
        description: berry.flavor_text_entries.find((f: FlavorTextType) => f.language.name === "ja")?.text ?? "",
        image: berry.sprites.default ?? "",
      }));
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
