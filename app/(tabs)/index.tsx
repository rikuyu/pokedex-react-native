import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import PokemonItem from "@/components/PokemonItem";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { fetchPokemonList } from "@/services/fetchPokemonList";
import { PokemonListItem } from "@/types/pokemon";

export default function Index() {
  const {
    data: pokemonList,
    isRefreshing,
    isLoading,
    hasError,
    fetchNext,
    hasMore,
  } = usePaginatedFetch<PokemonListItem>(fetchPokemonList);

  if (isRefreshing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small"/>
      </View>
    );
  }

  if (hasError) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.index.toString()}
        numColumns={3}
        data={pokemonList}
        columnWrapperStyle={{
          gap: 8,
          marginVertical: 4,
        }}
        renderItem={({item}) => (
          <PokemonItem
            index={item.index}
            name={item.name}
          />
        )}
        onEndReached={() => {
          if (hasMore && !isLoading && !isRefreshing) {
            void fetchNext();
          }
        }}
        onEndReachedThreshold={0.2}
        ListFooterComponent={isLoading ? <ActivityIndicator size="small"/> : null}
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
