import { useQuery } from "@tanstack/react-query";
import { fetchBerryList } from "@/services/fetchBerryList";
import { BerryData } from "@/types/berry";

export const useBerryList = () => {
  return useQuery<BerryData[]>({
    queryKey: ["berry_list"],
    queryFn: fetchBerryList,
  });
};
