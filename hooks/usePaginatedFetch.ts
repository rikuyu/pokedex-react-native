import { useState, useEffect } from "react";

export const usePaginatedFetch = <T>(
  fetchFunction: (offset: number, limit: number) => Promise<T[]>,
) => {
  const limit = 20;
  const [data, setData] = useState<T[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    const isFirst = offset === 0;

    if ((isFirst && isRefreshing) || (!isFirst && isLoading) || !hasMore) return;

    try {
      isFirst ? setIsRefreshing(true) : setIsLoading(true);
      setHasError(null);

      const response = await fetchFunction(offset, limit);

      if (response.length < limit) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...response]);
        setOffset((prev) => prev + limit);
      }
    } catch (e) {
      setHasError(e instanceof Error ? e : new Error("unknown error"));
    } finally {
      isFirst ? setIsRefreshing(false) : setIsLoading(false);
    }
  };

  const reset = () => {
    setData([]);
    setOffset(1);
    setHasMore(true);
    setHasError(null);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return {
    data,
    isRefreshing,
    isLoading,
    hasError,
    fetchNext: () => fetchData(),
    reset, hasMore,
  };
};
