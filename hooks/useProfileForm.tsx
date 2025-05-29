import { useEffect, useState } from "react";
import { useMyProfile } from "@/hooks/useMyProfile";
import * as ImagePicker from "expo-image-picker";

export function useProfileForm() {
  const { profile, isLoading, isError, updateProfile } = useMyProfile();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [iconImg, setIconImg] = useState<string | undefined>();
  const [headerImg, setHeaderImg] = useState<string | undefined>();

  useEffect(() => {
    if (profile && !isLoading) {
      setName(profile.name);
      setDescription(profile.description);
    }
  }, [profile, isLoading]);

  return {
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
  };
}

export async function pickImage(onSelect: (uri: string) => void) {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    onSelect(uri);
  }
}
