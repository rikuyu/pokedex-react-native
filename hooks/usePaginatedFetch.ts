import { useState, useEffect } from "react";

const usePaginatedFetch = <T>(
  fetchFunction: (page: number) => Promise<T[]>,
  autoFetch: boolean = false
) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async (pageToLoad = page) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetchFunction(pageToLoad);

      if (response.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...response]);
        setPage(pageToLoad + 1);
      }
    } catch (e) {
      setError(e instanceof Error ? e : new Error("unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData(1);
    }
  }, []);

  return { data, loading, error, fetchNext: () => fetchData(page), reset, hasMore };
};
