import { useRef, useState } from "react";

interface UseLoadingReturn {
  isLoading: boolean;
  loadingStateCache: React.MutableRefObject<boolean>;
  setIsLoading: (loading: boolean) => void;
}

export const useLoading = (initialState: boolean = false): UseLoadingReturn => {
  const loadingStateCache = useRef<boolean>(initialState);
  const [isLoading, setIsLoading] = useState(loadingStateCache.current);

  const updateLoading = (loading: boolean): void => {
    setIsLoading(loading);
    loadingStateCache.current = loading;
  };

  return {
    isLoading,
    loadingStateCache,
    setIsLoading: updateLoading,
  };
};
