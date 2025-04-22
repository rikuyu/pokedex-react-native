import { useCallback, useEffect, useState } from "react";
import { emptyProfile, getMyProfile, Profile, saveMyProfile } from "@/services/profileStorage";

export const useMyProfile = () => {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      const profile = await getMyProfile();
      setProfile(profile);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (newProfile: Profile) => {
    try {
      setLoading(true);
      await saveMyProfile(newProfile);
      setProfile(newProfile);
      setError(null);
    } catch (e) {
      const message = e instanceof Error ? e.message : "unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    updateProfile,
    loadProfile,
  };
};
