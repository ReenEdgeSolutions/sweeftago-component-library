"use client";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps, ButtonTypeMap } from "@mui/material/Button";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { pxToRem } from "../../../../../common";

// Create the raw styled "large" button, similar to BaseButton but bigger
const RawLargeBaseButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: "10px",
  textTransform: "none",
  padding: "16px 20px",
  fontSize: pxToRem(16),
  boxShadow: "none",
  fontWeight: 500,
  lineHeight: "140%",
}));

type MUIButtonOverridable = OverridableComponent<ButtonTypeMap<object, "button">>;

// Cast the raw styled button to the public type
export const LargeBaseButton = RawLargeBaseButton as MUIButtonOverridable;
