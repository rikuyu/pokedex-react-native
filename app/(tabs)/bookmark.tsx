import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useBookmarkPokemon } from "@/hooks/useBookmarkPokemon";
import BookmarkPokemon from "@/components/BookmarkPokemon";
import { useRouter } from "expo-router";

export default function Bookmark() {
  const router = useRouter();
  const {
    data: bookmarks,
    isLoading,
    hasError,
  } = useBookmarkPokemon();

  if (isLoading) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#96c3ff"
  },
});
