import React from "react";
import { FlatList } from "react-native";
import BookmarkPokemon from "@/components/BookmarkPokemon";
import { useRouter } from "expo-router";
import { useBookmarkPokemon } from "@/hooks/useDrizzleClient";
import { View } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import FullScreenErrorView from "@/components/FullScreenErrorView";

export default function Bookmark() {
  const router = useRouter();
  const {data: bookmarks, isLoading, isError} = useBookmarkPokemon();

  if (isLoading) {
    return <FullScreenLoadingIndicator/>;
  }

  if (isError) {
    return <FullScreenErrorView/>;
  }

  return (
    <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
      <FlatList
        style={{paddingVertical: 12}}
        columnWrapperStyle={{
          gap: 8,
          marginBottom: 12,
        }}
        data={bookmarks}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <BookmarkPokemon
            pokemon={item}
            onPress={() => router.push(`/pokemon/${item.id}`)}
          />
        )}
      />
    </View>
  );
};
