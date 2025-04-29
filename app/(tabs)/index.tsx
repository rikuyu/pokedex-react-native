import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PokemonItem from "@/components/PokemonItem";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { fetchPokemonList } from "@/services/fetchPokemonList";
import { PokemonListItem } from "@/types/pokemon";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  const router = useRouter();
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
      <ThemedView style={styles.container}>
        <ActivityIndicator size="small"/>
      </ThemedView>
    );
  }

  if (hasError) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Error</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        style={{paddingVertical: 12}}
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
            onPress={() => router.push(`/pokemon/${item.index}`)}
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
    </ThemedView>
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
