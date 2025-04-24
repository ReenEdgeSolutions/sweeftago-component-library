"use client";

// import { createTheme, ThemeOptions, useColorScheme } from "@mui/material/styles";
import { createTheme, ThemeOptions } from "@mui/material/styles";

import { mergeDeep } from "../../../common";
import { Theme } from "@mui/material";

export const baseLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F05A25",
    },
    secondary: {
      main: "#061E2D",
    },
    background: {
      default: "#F0F0F0",
    },
    text: {
      primary: "#202020",
      secondary: "#636363",
    },
  },
  typography: {
    fontFamily: "Inter, Kollektif, Arial, sans-serif",
  },
  font: {
    default: "Inter, Kollektif, Arial, sans-serif",
    title: "Kollektif, Inter, Arial, sans-serif",
    body: "Inter, Kollektif, Arial, sans-serif",
  },
  navbar: {
    navlinks: '#FDFDFD',
    closeBtn: '#D9D9D9',
    notificationBg: '#E8E8E8',
  },
  sideBar: {
    sideLinkBg: '#F0E4E1',
    linkText: '#8C8C8C',
    termsBg: '#F4F4F4'
  },
  footer: {
    footerlinks: '#D87759',
  },
  dashboard: {
    dashBg: '#EEECEB',
    order: {
      border: '#F3A48B',
      cardBg: '#F0E4E1'
    }
  },
  button: {
    contained: {
      primary: {
        background: "#F05A25",
        color: "#202020",
        hoverBackground: "#BB2B00",
        hoverColor: "#F2F2F2",
        border: "transparent",
        hoverBorder: "transparent",
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
      },
    },
    outlined: {
      primary: {
        background: "transparent",
        color: "#592C1D",
        border: "#BB2B00",
        hoverBackground: "#F3D8CF",
        hoverBorder: "#D87759",
        hoverColor: "#D87759",
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
        hoverBackground: "rgba(0,0,0,0.04)",
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
        color: "#592C1D",
        border: "transparent",
        hoverBackground: "transparent !important",
        hoverColor: "#BB2B00",
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
          background: "#F9F9F9",
          placeholder: "#636363",
          text: "#202020",
          label: "#202020",
          border: "#D9D9D9",
          error: "#FCC2B0",
        },
      },
      focused: {
        colors: {
          background: "#EEECEB",
          placeholder: "#636363",
          text: "#636363",
          label: "#202020",
          border: "#CECECE",
          error: "#FCC2B0",
        },
      },
    },
    filled: {
      default: {
        colors: {
          background: "#F4F4F4",
          placeholder: "#515D65",
          text: "#202020",
          label: "#202020",
          border: "#F4F4F4",
          error: "#FCC2B0",
        },
      },
      focused: {
        colors: {
          background: "#F0F0F0",
          placeholder: "#515D65",
          text: "#202020",
          label: "#202020",
          border: "#D9D9D9",
          error: "#FCC2B0",
        },
      },
    },
  },
});

// export const baseDarkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#0064E1",
//     },
//     secondary: {
//       main: "#F25922",
//     },
//     background: {
//       default: "#202020",
//     },
//     text: {
//       primary: "#EEE",
//       secondary: "#B6B6B6",
//     },
//   },
//   typography: {
//     fontFamily: "Inter, Kollektif, Arial, sans-serif",
//   },
//   font: {
//     default: "Inter, Kollektif, Arial, sans-serif",
//     title: "Kollektif, Inter, Arial, sans-serif",
//     body: "Inter, Kollektif, Arial, sans-serif",
//   },
//   color: {
//     error: "#FF5E5E",
//     info: "#2F80ED",
//     warning: "#FFBD60",
//     baseDarkMode: "#010005",
//     success50: "#E7F6EC",
//     success700: "#036B26",
//     lightGreenHighlight: "#E7F6EC",
//     secondaryMain: "#010005",
//     baseLight: "#F4F4F4",
//     mainGradient: "#0073EE",
//     redShade: "#FFE1E1",
//   },
//   gradients: {
//     innerBoxFaint:
//       "linear-gradient(28deg, rgba(0, 100, 225, 0.15) 19.69%, rgba(0, 100, 225, 0.15) 41.03%, rgba(0, 115, 238, 0.15) 63.98%, rgba(0, 130, 251, 0.15) 73.05%)",
//   },
//   button: {
//     contained: {
//       primary: {
//         background:
//           "linear-gradient(28deg, #0064E1 19.69%, #0064E1 41.03%, #0073EE 63.98%, #0082FB 73.05%)",
//         shadow:
//           "0px 14px 22px -9px rgba(16, 25, 40, 0.14), 0px 0px 3px -1px rgba(16, 25, 40, 0.04) !important",
//         color: "#F7F7F7",
//         hoverBackground:
//           "linear-gradient(28deg, #000A70 19.69%, #000A70 41.03%, #000A70 63.98%, #000A70 73.05%)\n",
//         hoverColor: "#F7F7F7",
//       },
//       secondary: {
//         background: "#010005 !important",
//         shadow: "none !important",
//         color: "#F4F4F4",
//       },
//       inherit: {
//         background: "inherit",
//         shadow: "none !important",
//         color: "inherit",
//       },
//     },
//     text: {
//       secondary: {
//         background: "transparent !important",
//         shadow: "none !important",
//         color: "#010005",
//       },
//     },
//   },
//   textField: {
//     outlined: {
//       default: {
//         colors: {
//           background: "#FFFFFF",
//           placeholder: "rgba(1, 0, 5, 0.3)",
//           text: "#010005",
//           label: "#010005",
//           border: "#515D6533",
//           error: "#FF5E5E",
//         },
//       },
//       focused: {
//         colors: {
//           background: "#FFFFFF",
//           placeholder: "rgba(1, 0, 5, 0.3)",
//           text: "#010005",
//           label: "#010005",
//           border: "#0064E1",
//           error: "#FF5E5E",
//         },
//       },
//     },
//     filled: {
//       default: {
//         colors: {
//           background: "#F4F4F4",
//           placeholder: "#515D65",
//           text: "#010005",
//           label: "#010005",
//           border: "#F4F4F4",
//           error: "#FF5E5E",
//         },
//       },
//       focused: {
//         colors: {
//           background: "#F4F4F4",
//           placeholder: "#515D65",
//           text: "#010005",
//           label: "#010005",
//           border: "#0064E1",
//           error: "#FF5E5E",
//         },
//       },
//     },
//     assessment: {
//       default: {
//         colors: {
//           background: "transparent",
//           placeholder: "rgba(1, 0, 5, 0.5)",
//           text: "#010005",
//           label: "#010005",
//           border: "#515D6533",
//           error: "#FF5E5E",
//         },
//       },
//       focused: {
//         colors: {
//           background: "transparent",
//           placeholder: "rgba(1, 0, 5, 0.5)",
//           text: "#010005",
//           label: "#010005",
//           border: "#010005",
//           error: "#FF5E5E",
//         },
//       },
//     },
//   },
//   }
// )

export const createAppTheme = (overrides: ThemeOptions): Theme => {
  // const { mode } = useColorScheme();
  // const isDarkMode = mode === 'dark';
  // const baseTheme = isDarkMode ? baseDarkTheme : baseLightTheme;
  const mergedTheme = mergeDeep(baseLightTheme, overrides);
  return createTheme(mergedTheme);
};
