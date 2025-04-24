import { Typography, useTheme } from "@mui/material";
import { pxToRem } from "../../../../../common";

type FooterlabelProps = {
  label: string;
};

export function Footerlabel({ label }: FooterlabelProps) {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        color: theme.palette.text.primary,
        fontSize: {
          xs: pxToRem(16),
          sm: pxToRem(11),
          md: pxToRem(16),
        },
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "24px",
        // textAlign: 'center'
      }}
    >
      {label}
    </Typography>
  );
}
