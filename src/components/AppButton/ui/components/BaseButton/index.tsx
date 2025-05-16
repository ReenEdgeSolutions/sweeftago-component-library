"use client";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps, ButtonTypeMap } from "@mui/material/Button";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { pxToRem } from "../../../../../common";

// Create the raw styled button
const RawBaseButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: "10px",
  textTransform: "none",
  padding: "16px 20px",
  fontSize: pxToRem(14),
  boxShadow: "none",
  fontWeight: 500,
  lineHeight: "130%",
}));

// Use `object` instead of {} to allow normal button event props (like onMouseEnter)
type MUIButtonOverridable = OverridableComponent<ButtonTypeMap<object, "button">>;

// Cast the raw styled button to the public type
export const BaseButton = RawBaseButton as MUIButtonOverridable;
