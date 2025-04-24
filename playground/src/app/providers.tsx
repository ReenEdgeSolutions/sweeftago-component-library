"use client";

import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppThemeProvider } from "@component-library";
import { defaultTheme } from "@/ui/assets/styles";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider theme={defaultTheme}>
        <>{children}</>
      </AppThemeProvider>
    </AppRouterCacheProvider>
  );
};
