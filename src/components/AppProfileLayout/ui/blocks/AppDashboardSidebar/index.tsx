import { Box, Stack, Typography } from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { StyledRating } from "../../components";
import { pxToRem } from "src/common";

// Define the rating item interface
export interface RatingItem {
  text: string;
  isCompleted: boolean;
  percentage: number;
}

export interface AppDashboardSidebarProps {
  ratePercent: number;
  ratingItems: RatingItem[];
}

export function AppDashboardSidebar({
  ratePercent,
  ratingItems
}: AppDashboardSidebarProps) {
  return (
    <Stack
      justifyContent="space-between"
      sx={{
        position: "relative",
        overflowY: "auto",
        height: "100vh",
        maxHeight: "100vh",
        paddingY: "20px",
        paddingLeft: "32px",
        paddingRight: "32px",
        maxWidth: "320px",
        background: "#F9F9F9",
        borderRight: "1px solid rgba(214, 212, 209, 0.7)",
        width: "100%",
      }}
    >
      {/* Top section */}
      <Stack>
        {/* Logo */}
        <Stack sx={{ width: '100%' }} justifyContent={"center"} mb={"50px"}>
          <AppLogo sx={{ width: "214px", height: "71.33px" }} />
        </Stack>

        <Stack
          sx={{
            border: "1px solid #D6D4D1",
            borderRadius: "10px",
            p: "16px",
            gap: "16px",
            width: "100%",
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 500,
                lineHeight: "140%",
                color: "#252423",
                textAlign: "center",
              }}
            >
              Profile Completed
            </Typography>

            <Box
              sx={{
                width: "66px",
                height: "66px",
                border: "10px solid #0AA65D",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: pxToRem(14),
                fontWeight: 600,
                color: "#0AA65D",
              }}
            >
              {ratePercent}%
            </Box>
          </Stack>

          <Stack spacing={"16px"}>
            {ratingItems.map((item, index) => (
              <StyledRating
                key={index}
                text={item.text}
                isInfoCompleted={item.isCompleted}
                percentage={item.percentage}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}