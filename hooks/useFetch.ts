import { useEffect, useState } from "react";

const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autoFetch: boolean = false,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchFunction();
      setData(response);
    } catch (e) {
      setError(e instanceof Error ? e : Error("unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return {data, loading, error, fetchData, reset};
};