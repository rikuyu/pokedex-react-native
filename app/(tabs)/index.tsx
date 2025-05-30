import { FlatList } from "react-native";
import PokemonItem from "@/components/PokemonItem";
import { useRouter } from "expo-router";
import { useInfinitePokedex } from "@/hooks/useInfinitePokedex";
import { View } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import React from "react";
import LoadingItem from "@/components/LoadingItem";
import FullScreenErrorView from "@/components/FullScreenErrorView";

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

  if (!isFetchingNextPage && isFetching) return <FullScreenLoadingIndicator/>;

  if (isError) return <FullScreenErrorView/>;

  return (
    <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <FlatList
        style={{paddingTop: 12}}
        keyExtractor={(item) => item.index.toString()}
        numColumns={3}
        data={pokedex}
        columnWrapperStyle={{gap: 8, marginTop: 8}}
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
        ListFooterComponent={hasNextPage ? <LoadingItem/> : null}
      />
    </View>
  );
}
