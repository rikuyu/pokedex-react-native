import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { emptyProfile, getMyProfile, Profile, saveMyProfile } from "@/services/profileStorage";

export const useMyProfile = () => {
  const queryClient = useQueryClient();

  const {
    data: profile = emptyProfile,
    isLoading,
    isError,
  } = useQuery<Profile>({
    queryKey: ["my_profile"],
    queryFn: getMyProfile,
    staleTime: Infinity,
  });

  const {mutateAsync: updateProfile} = useMutation({
    mutationFn: async (newProfile: Profile) => {
      try {
        await saveMyProfile(newProfile);
        return newProfile;
      } catch (e) {
        console.error("Error saving profile:", e);
      }
    },
    onSuccess: (newProfile) => {
      queryClient.setQueryData(["my_profile"], newProfile);
    },
  });

  return {
    profile,
    isLoading,
    isError,
    updateProfile,
  };
};
