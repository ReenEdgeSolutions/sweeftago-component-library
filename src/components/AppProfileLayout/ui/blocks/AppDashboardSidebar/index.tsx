import { Box,Stack,Typography,} from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { StyledRating } from "../../components";
import { pxToRem } from "src/common";

export interface AppDashboardSidebarProps{
  isGeneralInfoCompleted: boolean
  isPickUpDetailsCompleted: boolean
  ratePercent: number
}
export function AppDashboardSidebar({
  isGeneralInfoCompleted,
  isPickUpDetailsCompleted,
  ratePercent
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
        paddingRight: "32px" ,
        maxWidth: "320px",
        background: "#F9F9F9",
        borderRight: "1px solid rgba(214, 212, 209, 0.7)",
        width: "100%",
      }}
    >
      {/* Top section */}
      <Stack>
        {/* Logo */}
        <Stack sx={{ width: '100%'}} justifyContent={"center"} mb={"50px"}>
            <AppLogo sx={{width: "214px", height: "71.33px"}}/>
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
              }}
            >
              {ratePercent}%
            </Box>
          </Stack>

          <Stack spacing={"16px"}>
            <StyledRating
              text="General Information "
              isInfoCompleted={isGeneralInfoCompleted}
            />

            <StyledRating
              text="Pickup  Details"
              isInfoCompleted={isPickUpDetailsCompleted}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}