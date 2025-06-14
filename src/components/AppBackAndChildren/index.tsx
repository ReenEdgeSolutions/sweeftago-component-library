import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { pxToRem } from "../../common";
import { ReactNode } from "react";

type AppBackAndChildrenProps = {
  title: string;
  desc: string;
  children: ReactNode;
  removeIcon?: boolean;
  onBackClick?: () => void;
}

export function AppBackAndChildren({
  title,
  desc,
  children,
  removeIcon = true,
  onBackClick
}: AppBackAndChildrenProps) {
  const theme = useTheme()

  return (
    <Stack
      spacing={"28px"}
      sx={{}}
    >
      {removeIcon && (
        <IconButton
          onClick={onBackClick}
          sx={{
            background: theme.palette.background.paper,
            width: "39px",
            height: "38px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIos sx={{ width: "24px", height: "24px" }} />
        </IconButton>
      )}
      <Stack>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: pxToRem(18),
            lineHeight: "18px",
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        {desc && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: pxToRem(16),
              lineHeight: "24px",
              color: theme.palette.text.primary,
            }}
          >
            {desc}
          </Typography>
        )}
        <Box>{children}</Box>
      </Stack>
    </Stack>
  )
}
