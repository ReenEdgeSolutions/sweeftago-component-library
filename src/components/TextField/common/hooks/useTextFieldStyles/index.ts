import { AppTextFieldProps } from "../../../ui/components";
import { SxProps, Theme } from "@mui/system";

export const useTextFieldStyles = ({
  borderRadius = "10px",
  borderWidth = "1px",
  padding = {
    xs: "14px 20px !important",
    md: "16px 20px !important",
  },
  fontSize = {
    xs: "14px",
    md: "16px",
  },
  error,
}: Pick<
  AppTextFieldProps,
  "borderRadius" | "borderWidth" | "fontSize" | "padding" | "error" | "success"
>): SxProps<Theme> => {
  const defaultBorder = "#D5D5D5";
  const defaultBg = "transparent";
  const errorBorder = "#FF5E5E";
  const errorBg = "#FFF5F5";

  return {
    width: "100%",
    backgroundColor: defaultBg,
    borderRadius,

    "& .MuiInputBase-input": {
      fontWeight: 400,
      fontSize,
      color: "#212121",
      padding,
      lineHeight: "140%",
      "&::placeholder": {
        color: "#252423",
        opacity: 1,
      },
      "&:-webkit-autofill": {
        transition: "background-color 600000s 0s, color 600000s 0s",
      },
      "&[data-autocompleted]": {
        backgroundColor: "transparent !important",
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
    },

    "& .MuiInputLabel-root": {
      color: " #212121",
      fontWeight: 400,
      fontSize,
      "&.MuiInputLabel-shrink": {
        fontSize: "14px", // make sure floating label stays same size
        color: " #9D99AC", // or any consistent color you want
      },
      "&.Mui-focused": {
        color: " #9D99AC",
        fontSize: "14px",
      },
      "&.Mui-error": {
        color: " #9D99AC",
      },
    },

    "& .MuiOutlinedInput-root": {
      backgroundColor: error ? errorBg : defaultBg,

      "& fieldset": {
        borderRadius,
        border: `${borderWidth} solid ${error ? errorBorder : defaultBorder}`,
      },

      "&:hover fieldset": {
        border: `${borderWidth} solid ${error ? errorBorder : defaultBorder}`,
      },

      "&.Mui-focused": {
        backgroundColor: error ? errorBg : defaultBg,
        "& fieldset": {
          border: `${borderWidth} solid ${error ? errorBorder : defaultBorder}`,
        },
      },
    },
  };
};
