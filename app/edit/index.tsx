import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import { useMyProfile } from "@/hooks/useMyProfile";
import EditSaveButton from "@/components/EditSaveButton";

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
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  const handleSave = async () => {
    await updateProfile({name, description});
    router.dismiss();
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <EditHeaderSection />
      <View style={{height: 80}}/>
      <EditBiographySection
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
      <EditSaveButton onPress={handleSave}/>
      <View style={{height: 60}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
