"use client"
import { Box, Typography, Stack } from "@mui/material";
import { LayoutHeader } from "../LayoutHeader";

interface OtpVerificationProps {
  phoneNumber: string;
  showHeader?: boolean;
  onDesktopHelpClick: () => void;
  onMobileHelpClick: () => void;
  sx?: object;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}
export const AppOtpLayout = ({
  phoneNumber,
  showHeader = true,
  onDesktopHelpClick,
  onMobileHelpClick,
  sx,
  title,
  subtitle,
  children
}: OtpVerificationProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {showHeader && (
        <LayoutHeader
          handleDesktopHelpClick={onDesktopHelpClick}
          handleMobileHelpClick={onMobileHelpClick}
        />
      )}

      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "614px" },
          width: { xs: "calc(100% - 32px)", sm: "calc(100% - 48px)" },
          mt: {
            xs: "90px",
            sm: "180px",
            md: "212px"
          },
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: {
            xs: "16px",
            sm: "24px",
            md: "32px",
          },
          borderRadius: "10px",
          border: { xs: "none", sm: "1px solid #D5D5D5" },
          backgroundColor: "transparent",
          ...sx
        }}
      >
        <Stack spacing={"40px"} sx={{ width: "100%" }}>
          <Stack spacing="8px">
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                color: "#252423",
                lineHeight: "120%",
                mb: "5px",
                textAlign: { xs: "left", sm: "center" }
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 500,
                color: "#615D5D",
                lineHeight: "120%",
                mb: "5px",
                textAlign: { xs: "left", sm: "center" }
              }}
            >
              {subtitle}
              <Typography
                component={"span"}
                sx={{
                  ml: "5px",
                }}
              >
                ({phoneNumber})
              </Typography>
            </Typography>
          </Stack>
          {children}
        </Stack>
      </Box>
    </Box>
  );
};