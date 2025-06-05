"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { mergeDeep } from "../../../common";

// Import the theme declarations from above or include them here

export const baseLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F98D31",
    },
    secondary: {
      main: "#061E2D",
    },
    background: {
      default: "#F9F9F9",
    },
    text: {
      primary: "#212121",
      secondary: "#979797",
    },
  },
  typography: {
    fontFamily: "Inter, Manrope, Arial, sans-serif",
  },
  font: {
    default: "Inter, Manrope, Arial, sans-serif",
    title: "Manrope, Inter, Arial, sans-serif",
    body: "Inter, Manrope, Arial, sans-serif",
  },
  color: {
    blue: '#37ACFA',
    green: '#08A654',
    yellow: '#C4C10B',
    pink: '#EE1FDA',
    error: "#f5b2b2"
  },
  button: {
    contained: {
      primary: {
        background: "#F98D31",
        color: "#252423",
        hoverBackground: "#E57F29",
        hoverColor: "#252423",
        border: "transparent",
        hoverBorder: "transparent",
        focusBackground: "#FAA45A",
        focusColor: "#252423",
        focusBorder: "transparent",
      },
      secondary: {
        background: "#061E2D",
        color: "#F2F2F2",
        hoverBackground: "#1D3545",
        hoverColor: "#F2F2F2",
        border: "transparent",
        hoverBorder: "transparent",
      },
      inherit: {
        background: "inherit",
        color: "inherit",
        border: "transparent",
        hoverBackground: "inherit",
        hoverColor: "inherit",
        hoverBorder: "transparent",
        focusBackground: "inherit",
        focusColor: "inherit",
        focusBorder: "transparent",
      },
    },
    outlined: {
      primary: {
        background: "transparent",
        color: "#252423",
        border: "#F98D31",
        hoverBackground: "transparent",
        hoverBorder: "#F98D31",
        hoverColor: "#252423",
      },
      secondary: {
        background: "transparent",
        color: "#061E2D",
        border: "#061E2D",
        hoverBackground: "#E6EBEE",
        hoverBorder: "#061E2D",
        hoverColor: "#1D3545",
      },
      inherit: {
        background: "transparent",
        color: "inherit",
        border: "currentColor",
        hoverBackground: "currentColor",
        hoverBorder: "inherit",
        hoverColor: "inherit",
      },
    },
    text: {
      secondary: {
        background: "transparent !important",
        color: "#2E556F",
        border: "transparent",
        hoverBackground: "transparent !important",
        hoverColor: "#1D3545",
        hoverBorder: "transparent",
      },
      primary: {
        background: "transparent !important",
        color: "#F98D31",
        border: "transparent",
        hoverBackground: "transparent !important",
        hoverColor: "#F98D31",
        hoverBorder: "transparent",
      },
      inherit: {
        background: "transparent !important",
        color: "inherit",
        border: "transparent",
        hoverBackground: "transparent !important",
        hoverColor: "inherit",
        hoverBorder: "transparent",
      },
    },
  },
  textField: {
    outlined: {
      default: {
        colors: {
          background: "transparent",
          placeholder: "#252423",
          text: "#252423",
          label: "#9D99AC",
          border: "#D5D5D5",
          errorBg: "#F5F5F5",
          errorBorder: "#E8E6F8",
          error: "#FF5E5E",
        },
      },
      focused: {
        colors: {
          background: "#F5F5F5",
          placeholder: "#515D65",
          text: "#202020",
          label: "#9D99AC",
          border: "#D5D5D5",
          errorBg: "#FFF5F5",
          errorBorder: "#FFD8D8",
          error: "#FF5E5E",
        },
      },
    },
    filled: {
      default: {
        colors: {
          background: "transparent",
          placeholder: "#252423",
          text: "#252423",
          label: "#9D99AC",
          border: "#D5D5D5",
          errorBg: "#F5F5F5",
          errorBorder: "#E8E6F8",
          error: "#FF5E5E",
        },
      },
      focused: {
        colors: {
          background: "#F5F5F5",
          placeholder: "#515D65",
          text: "#202020",
          label: "#9D99AC",
          border: "#D5D5D5",
          errorBg: "#FFF5F5",
          errorBorder: "#FFD8D8",
          error: "#FF5E5E",
        },
      },
    },
  },
});

export const createAppTheme = (overrides: ThemeOptions): Theme => {
  const mergedTheme = mergeDeep(baseLightTheme, overrides);
  return createTheme(mergedTheme);
};