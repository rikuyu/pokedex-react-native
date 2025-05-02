import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PokemonItem from "@/components/PokemonItem";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useInfinitePokedex } from "@/hooks/useInfinitePokedex";

export default function Index() {
  const router = useRouter();
  const {
    data: pokedex,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
  } = useInfinitePokedex();

  if (!isFetchingNextPage && isFetching) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="small"/>
      </ThemedView>
    );
  }

  if (isError) {
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
        data={pokedex}
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
          if (hasNextPage && !isFetchingNextPage) {
            void fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator size="small"/> : null}
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
