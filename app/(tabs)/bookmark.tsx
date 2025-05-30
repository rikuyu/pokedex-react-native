import React from "react";
import { FlatList, Pressable } from "react-native";
import BookmarkPokemon from "@/components/BookmarkPokemon";
import { useRouter } from "expo-router";
import { useBookmarkPokemon } from "@/hooks/useDrizzleClient";
import { Text, View, YStack } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import FullScreenErrorView from "@/components/FullScreenErrorView";
import { i18nText } from "@/utils/i18n";

export default function Bookmark() {
  const router = useRouter();
  const {data: bookmarks, isLoading, isError} = useBookmarkPokemon();

  if (isLoading) return <FullScreenLoadingIndicator/>;

  if (isError) return <FullScreenErrorView/>;

  if (bookmarks?.length === 0) return <EmptyView onPress={() => router.push("/")}/>;

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

const EmptyView = ({onPress}: { onPress: () => void }) => (
  <YStack f={1} ai={"center"} jc={"center"} bg={"$background"}>
    <Text fos={14}>{i18nText("bookmarkEmptyTitle")}</Text>
    <View h={20}/>
    <Pressable onPress={onPress}>
      <View
        px={12} py={8} bg={"$background"}
        ai={"center"} jc={"center"}
        br={999} bw={1} boc={"$color"}>
        <Text>{i18nText("bookmarkEmptyBtnLabel")}</Text>
      </View>
    </Pressable>
  </YStack>
);
