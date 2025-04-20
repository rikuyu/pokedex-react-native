import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import { useMyProfile } from "@/hooks/useMyProfile";
import EditSaveButton from "@/components/EditSaveButton";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  const {
    profile,
    loading,
    error,
    updateProfile,
  } = useMyProfile();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (!loading && profile) {
      setName(profile.name);
      setDescription(profile.description);
    }
  }, [loading, profile]);

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large"/>
      </ThemedView>
    );
  }

  const handleSave = async () => {
    await updateProfile({name, description});
    router.dismiss();
  };

  if (error) {
    return (
      <ThemedView style={styles.container}>
        <Text>Error</Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <EditHeaderSection />
      <ThemedView style={{height: 80, zIndex: -1}}/>
      <EditBiographySection
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
      <EditSaveButton onPress={handleSave}/>
      <ThemedView style={{height: 60}}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
