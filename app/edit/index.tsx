import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import { useMyProfile } from "@/hooks/useMyProfile";
import EditSaveButton from "@/components/EditSaveButton";
import { ThemedView } from "@/components/ThemedView";
import * as ImagePicker from "expo-image-picker";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  const {
    profile,
    loading,
    error,
    updateProfile,
  } = useMyProfile();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [iconImg, setIconImg] = useState<string | undefined>(undefined);
  const [headerImg, setHeaderImg] = useState<string | undefined>(undefined);

  const router = useRouter();

  useEffect(() => {
    if (!loading && profile) {
      setName(profile.name);
      setDescription(profile.description);
    }
  }, [loading, profile]);

  const pickImageAsync = async (type: "icon" | "header") => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      if (type === "icon") setIconImg(uri);
      if (type === "header") setHeaderImg(uri);
    }
  };

  if (loading) {
    return (
      <ThemedView style={{flex: 1}}>
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
      <ThemedView style={{flex: 1}}>
        <ThemedText>Error</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{flex: 1}}>
      <EditHeaderSection
        iconImg={iconImg}
        setIcon={async (): Promise<void> => pickImageAsync("icon")}
        headerImg={headerImg}
        setHeader={async (): Promise<void> => pickImageAsync("header")}
      />
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
