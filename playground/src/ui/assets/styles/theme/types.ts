/* eslint-disable @typescript-eslint/no-empty-object-type */
import { BaseThemeExtension } from "@component-library";
import "@mui/material/styles";

interface ThemeExtension extends BaseThemeExtension {}

declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends ThemeExtension {}
}

export {};
