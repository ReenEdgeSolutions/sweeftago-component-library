import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Function to get initial responsive state based on window size
const getInitialResponsiveState = () => {
  if (typeof window === 'undefined') {
    // SSR fallback 
    return {
      isMobile: false,
      isTablet: false,
      isBelowLg: false,
    };
  }

  const width = window.innerWidth;
  const isMobile = width < 900;
  const isTablet = width < 1200 && !isMobile;
  const isBelowLg = width < 1200;

  return {
    isMobile,
    isTablet,
    isBelowLg,
  };
};

export function useResponsive(): {
  isMobile: boolean;
  isTablet: boolean;
  isBelowLg: boolean;
  hasMounted: boolean;
  isHydrating: boolean;
} {
  const theme = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const [isHydrating, setIsHydrating] = useState(true);

  // Get initial state on client-side
  const [responsiveState, setResponsiveState] = useState(() => getInitialResponsiveState());

  // MUI media queries for comparison
  const isMobileQuery = useMediaQuery(theme.breakpoints.down("md"));
  const isTabletQuery = useMediaQuery(theme.breakpoints.down("lg"));
  const isBelowLgQuery = useMediaQuery(theme.breakpoints.down("lg"));

  // Set mounted state
  useEffect(() => {
    setHasMounted(true);
    // Allow one frame for hydration to complete
    const timer = setTimeout(() => {
      setIsHydrating(false);
    }, 16); // One frame at 60fps

    return () => clearTimeout(timer);
  }, []);

  // Sync with MUI media queries after hydration
  useIsomorphicLayoutEffect(() => {
    if (hasMounted && !isHydrating) {
      const newState = {
        isMobile: isMobileQuery,
        isTablet: isTabletQuery && !isMobileQuery,
        isBelowLg: isBelowLgQuery,
      };

      // Only update if there's actually a change
      if (
        newState.isMobile !== responsiveState.isMobile ||
        newState.isTablet !== responsiveState.isTablet ||
        newState.isBelowLg !== responsiveState.isBelowLg
      ) {
        setResponsiveState(newState);
      }
    }
  }, [hasMounted, isHydrating, isMobileQuery, isTabletQuery, isBelowLgQuery, responsiveState]);

  // Handle window resize for immediate updates
  useEffect(() => {
    if (!hasMounted) return;

    const handleResize = () => {
      const newState = getInitialResponsiveState();
      setResponsiveState(newState);
    };

    // Debounce resize events
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 16);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [hasMounted]);

  return {
    ...responsiveState,
    hasMounted,
    isHydrating,
  };
}