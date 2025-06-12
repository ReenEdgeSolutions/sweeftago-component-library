"use client"
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
        p: {xs: "12px 16px" ,sm: "16px 24px"},
        gap: {xs: "8px", md:"16px"} ,
        height: "100%",
        background: background,
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: pxToRem(14),
            md: pxToRem(16)
          },
          fontWeight: 500,
          color: "#615D5D",
          lineHeight: "140%",
          textAlign: {sm: "center",md: "left"}
        }}
      >
        {cardLabel}
      </Typography>

      <Typography
        sx={{
          // fontFamily: "nunito Sans"
          fontSize: {
            xs: pxToRem(16),
            sm: pxToRem(18),
            md: pxToRem(24)
          },
          fontWeight: {xs:600, md: 700},
          color: "#000000",
          lineHeight: "120%",
          textAlign: {sm: "center",md: "left"}
        }}
      >
        {isProfileComplete ? cardValue : 0}
      </Typography>
    </Stack>
  )
}