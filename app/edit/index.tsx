import React, { useEffect, useState } from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import { useMyProfile } from "@/hooks/useMyProfile";
import EditSaveButton from "@/components/EditSaveButton";
import { ThemedView } from "@/components/ThemedView";
import * as ImagePicker from "expo-image-picker";
import { ThemedText } from "@/components/ThemedText";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Index() {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;
  const {
    profile,
    isLoading,
    isError,
    updateProfile,
  } = useMyProfile();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [iconImg, setIconImg] = useState<string | undefined>(undefined);
  const [headerImg, setHeaderImg] = useState<string | undefined>(undefined);

  const router = useRouter();

  useEffect(() => {
    if (!isLoading && profile) {
      setName(profile.name);
      setDescription(profile.description);
    }
  }, [isLoading, profile]);

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

  if (isLoading) {
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

  if (isError) {
    return (
      <ThemedView style={{flex: 1}}>
        <ThemedText>Error</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{flex: 1}}>
      <EditHeaderSection
        imageSize={imageSize}
        iconImg={iconImg}
        setIcon={async (): Promise<void> => pickImageAsync("icon")}
        headerImg={headerImg}
        setHeader={async (): Promise<void> => pickImageAsync("header")}
      />
      <ThemedView style={{height: imageSize / 2 + 20, zIndex: -1}}/>
      <KeyboardAwareScrollView>
        <EditBiographySection
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />
        <ThemedView style={{flex: 1}}/>
      </KeyboardAwareScrollView>
      <EditSaveButton onPress={handleSave}/>
    </ThemedView>
  );
}
