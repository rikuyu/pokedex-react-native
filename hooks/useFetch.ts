import { useEffect, useState } from "react";

export const useFetch = <T, K>(
  arg: K,
  fetchFunction: (arg: K) => Promise<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setHasError(null);

      const response = await fetchFunction(arg);
      setData(response);
    } catch (e) {
      setHasError(e instanceof Error ? e : Error("unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setData(null);
    setHasError(null);
  };

  useEffect(() => {
     void fetchData();
  }, []);

  return {data, isLoading, hasError, fetchData, reset};
};