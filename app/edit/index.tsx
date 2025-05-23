import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import { useMyProfile } from "@/hooks/useMyProfile";
import EditSaveButton from "@/components/EditSaveButton";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import FullScreenErrorView from "@/components/FullScreenErrorView";

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
    return <FullScreenLoadingIndicator />;
  }

  if (isError) {
    return <FullScreenErrorView/>;
  }

  const handleSave = async () => {
    await updateProfile({name, description});
    router.dismiss();
  };

  return (
    <View f={1} bg={"$background"}>
      <EditHeaderSection
        imageSize={imageSize}
        iconImg={iconImg}
        setIcon={async (): Promise<void> => pickImageAsync("icon")}
        headerImg={headerImg}
        setHeader={async (): Promise<void> => pickImageAsync("header")}
      />
      <View h={imageSize / 2 + 20} zi={1}/>
      <KeyboardAwareScrollView>
        <EditBiographySection
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />
        <View f={1}/>
      </KeyboardAwareScrollView>
      <EditSaveButton onPress={handleSave}/>
    </View>
  );
}
