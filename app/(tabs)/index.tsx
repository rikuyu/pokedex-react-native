import { ActivityIndicator, FlatList } from "react-native";
import PokemonItem from "@/components/PokemonItem";
import { useRouter } from "expo-router";
import { useInfinitePokedex } from "@/hooks/useInfinitePokedex";
import { Text, View } from "tamagui";

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
      <View f={1} ai={"center"} jc={"center"}>
        <ActivityIndicator size="small"/>
      </View>
    );
  }

  if (isError) {
    return (
      <View f={1} ai={"center"} jc={"center"}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <FlatList
        style={{paddingVertical: 12}}
        keyExtractor={(item) => item.index.toString()}
        numColumns={3}
        data={pokedex}
        columnWrapperStyle={{gap: 8, marginVertical: 4}}
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
    </View>
  );
}
