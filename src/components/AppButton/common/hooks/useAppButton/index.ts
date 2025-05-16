import { CircularProgressProps, useTheme } from "@mui/material";
import React, { useState } from "react";
import type { AppButtonProps } from "../../../index";

export interface UseAppButtonReturn {
  styles: AppButtonProps["sx"];
  loaderStyles: CircularProgressProps["sx"];
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAppButton = ({
  variant = "contained",
  color = "primary",
}: Pick<AppButtonProps, "variant" | "color">): UseAppButtonReturn => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Safely read from theme:
  const variantStyles = theme.button?.[variant] || theme.button?.contained; // fallback to "contained" if missing
  const colorStyles = variantStyles?.[color] || variantStyles?.primary; // fallback to "primary" if missing

  // Provide defaults if colorStyles is still falsy:
  const {
    background = " #F98D31",
    color: textColor = "#252423",
    border = "transparent",
    hoverBackground = "#E57F29",
    hoverColor = "#252423",
    hoverBorder = "transparent",
  } = colorStyles || {};

  const styles: AppButtonProps["sx"] = {
    background,
    color: textColor,
    border: `1px solid ${border}`,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      background: `${hoverBackground} !important`,
      color: hoverColor,
      border: `1px solid ${hoverBorder}`,
    },
    "&:disabled": {
      background: variant === "contained" ? background : "#E0E0E0",
      color: "#615D5D",
      border: "1px solid transparent",
      opacity: 0.7,
    },
  };

  const loaderStyles: CircularProgressProps["sx"] = {
    color: textColor,
    marginRight: "20px",
  };

  return {
    styles,
    loaderStyles,
    isHovered,
    setIsHovered,
  };
};
