import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import BookmarkPokemon from "@/components/BookmarkPokemon";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useBookmarkPokemon } from "@/hooks/useDrizzleClient";

export default function Bookmark() {
  const router = useRouter();
  const {data: bookmarks, isLoading, isError} = useBookmarkPokemon();

  if (isLoading) {
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
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
