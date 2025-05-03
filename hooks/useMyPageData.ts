import { useMyProfile } from "@/hooks/useMyProfile";
import { useBerryList } from "@/hooks/useBerryList";

export const useMyPageData = () => {
  const profileQuery = useMyProfile();
  const berryListQuery = useBerryList();

  const isLoading = profileQuery.isLoading || berryListQuery.isLoading;
  const isError = profileQuery.isError || berryListQuery.isError;

  return {
    profile: profileQuery.profile,
    berryList: berryListQuery.data,
    isLoading,
    isError,
  };
};
