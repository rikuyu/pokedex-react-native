import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokedex } from "@/services/fetchPokedex";

export const useInfinitePokedex = () => {
  const limit = 30;

  return useInfiniteQuery({
    queryKey: ["pokemon_list"],
    queryFn: ({pageParam}) => fetchPokedex(pageParam, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < limit ? undefined : allPages.length * limit;
    },
  });
};
