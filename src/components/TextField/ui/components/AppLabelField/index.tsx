import { Typography } from "@mui/material";
import { pxToRem } from "../../../../../common";

type AppLabelProps = {
  label: string;
};

export function AppLabel({ label }: AppLabelProps) {
  return (
    <Typography
      sx={{
        fontFamily: (theme) => theme.font.default,
        fontWeight: 500,
        fontSize: pxToRem(14),
        lineHeight: "20px",
        color: (theme) => theme.palette.text.primary,
      }}
    >
      {label}
    </Typography>
  );
}
