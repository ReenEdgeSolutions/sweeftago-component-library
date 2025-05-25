import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../../../../common/utils"

interface CardsProps {
  background: string
  cardLabel: string
  cardValue: string
  isProfileComplete?: boolean // Make it optional
}

export const Cards = ({
  background,
  cardLabel,
  cardValue,
  isProfileComplete = false // Provide default value
}: CardsProps) => {
  return (
    <Stack
      sx={{
        p: "16px 24px",
        gap: "24px",
        height: "100%",
        background: background,
        borderRadius: "10px",
        width: "100%"
      }}
    >
      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 400,
          color: "#615D5D",
          lineHeight: "140%",
        }}
      >
        {cardLabel}
      </Typography>

      <Typography
        sx={{
          // fontFamily: "nunito Sans"
          fontSize: pxToRem(24),
          fontWeight: 700,
          color: "#000000",
          lineHeight: "120%"
        }}
      >
        {isProfileComplete ? cardValue : 0}
      </Typography>
    </Stack>
  )
}