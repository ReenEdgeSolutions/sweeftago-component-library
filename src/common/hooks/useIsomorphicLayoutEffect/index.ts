import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

export function useResponsive() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  // These will be false during SSR and initial render
  const isMobileQuery = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true, // This prevents SSR mismatch
  });
  const isTabletQuery = useMediaQuery(theme.breakpoints.down("lg"), {
    noSsr: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    isMobile: mounted ? isMobileQuery : false,
    isTablet: mounted ? isTabletQuery && !isMobileQuery : false,
    isBelowLg: mounted ? isTabletQuery : false,
    isDesktop: mounted ? !isTabletQuery : true,
    hasMounted: mounted,
  };
}