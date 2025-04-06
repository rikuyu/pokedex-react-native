import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import PokemonItem from "@/components/PokemonItem";

export type Pokemon = {
  index: number
  name: string
  imageUrl: ImageSourcePropType
}

export default function Index() {

  const pokemonList: Pokemon[] = Array.from({length: 12}, (_, i) => ({
    index: i + 1,
    name: "ひとかげ",
    imageUrl: require("../../assets/images/pokemon.png"),
  }));

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.index.toString()}
        numColumns={3}
        data={pokemonList}
        renderItem={({item}) => (
          <PokemonItem
            index={item.index}
            name={item.name}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
