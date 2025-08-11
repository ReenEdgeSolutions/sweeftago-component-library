import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useResponsive(): {
  isMobile: boolean;
  isTablet: boolean;
  isBelowLg: boolean;
  hasMounted: boolean;
} {
  const theme = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  // These will be false during SSR
  const isMobileQuery = useMediaQuery(theme.breakpoints.down("md"));
  const isTabletQuery = useMediaQuery(theme.breakpoints.down("lg"));
  const isBelowLgQuery = useMediaQuery(theme.breakpoints.down("lg"));

  // State to track actual responsive values
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isBelowLg, setIsBelowLg] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted) {
      setIsMobile(isMobileQuery);
      setIsTablet(isTabletQuery && !isMobileQuery);
      setIsBelowLg(isBelowLgQuery);
    }
  }, [hasMounted, isMobileQuery, isTabletQuery, isBelowLgQuery]);

  return {
    isMobile,
    isTablet,
    isBelowLg,
    hasMounted,
  };
}