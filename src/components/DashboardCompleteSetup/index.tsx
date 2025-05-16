import { Stack, Typography } from "@mui/material"
import { pxToRem } from "src/common"
import { AppButton } from "../AppButton"

export const DashboardCompleteSetup = ({
  handleCompleteSetup,
}: {
  handleCompleteSetup: () => void
}) => {
  return(
    <Stack
      sx={{
        p: "17px 24px",
        borderRadius: "10px",
        border: "1px solid #D5D5D5",
        gap: "8px",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 500,
          lineHeight: "140%",
          color: "#252423",
        }}
      >
        Complete Your Profile Set up
      </Typography>

      <Typography
        sx={{
          fontSize: pxToRem(14),
          fontWeight: 400,
          lineHeight: "140%",
          color: "#615D5D",
        }}
      >
        You're just two steps away from completing your profile
      </Typography>

      <AppButton
        disableArrow
        sx={{
          color: "#F98D31",
          padding: "0px",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={handleCompleteSetup}
      >
        Complete Setup Now
      </AppButton>
    </Stack>
  )
}