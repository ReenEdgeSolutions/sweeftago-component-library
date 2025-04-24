import { PropsWithChildren } from "react";
import { ThemeProviderProps } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers";

export type AppThemeProviderProps = Required<PropsWithChildren> & {
  theme: ThemeProviderProps["theme"];
};

export const AppThemeProvider = ({ children, theme }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
    </ThemeProvider>
  );
};
