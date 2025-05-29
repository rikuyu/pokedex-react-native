import React, { useCallback } from "react";
import { Alert, useWindowDimensions } from "react-native";
import EditHeaderSection from "@/components/EditHeaderSection";
import EditBiographySection from "@/components/EditBiographySection";
import { useRouter } from "expo-router";
import EditSaveButton from "@/components/EditSaveButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import FullScreenErrorView from "@/components/FullScreenErrorView";
import { i18nText } from "@/utils/i18n";
import { pickImage, useProfileForm } from "@/hooks/useProfileForm";

export default function Index() {
  const {width} = useWindowDimensions();
  const imageSize = width / 5;
  const router = useRouter();

  const {
    name,
    setName,
    description,
    setDescription,
    iconImg,
    setIconImg,
    headerImg,
    setHeaderImg,
    isLoading,
    isError,
    updateProfile,
  } = useProfileForm();

  const handleSave = useCallback(async () => {
    if (!name || !description) {
      Alert.alert(
        i18nText("editErrorTitle"),
        i18nText("editErrorMsg"),
        [{text: "OK"}],
        {cancelable: true},
      );
      return;
    }

    await updateProfile({name, description});
    router.dismiss();
  }, [name, description, updateProfile, router]);

  if (isLoading) return <FullScreenLoadingIndicator/>;

  if (isError) return <FullScreenErrorView/>;

  return (
    <View f={1} bg={"$background"}>
      <EditHeaderSection
        imageSize={imageSize}
        iconImg={iconImg}
        setIcon={() => pickImage(setIconImg)}
        headerImg={headerImg}
        setHeader={() => pickImage(setHeaderImg)}
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
