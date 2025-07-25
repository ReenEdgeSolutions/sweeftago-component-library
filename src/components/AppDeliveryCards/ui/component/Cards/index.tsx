"use client"
import { Stack, Typography, CircularProgress } from "@mui/material"
import { pxToRem } from "../../../../../common/utils"

interface CardsProps {
  background: string
  cardLabel: string
  cardValue: string | number
  isProfileComplete?: boolean
  isLoading?: boolean
}

export const Cards = ({
  background,
  cardLabel,
  cardValue,
  isProfileComplete = false,
  isLoading = false
}: CardsProps) => {
  const renderCardValue = () => {
    // Show loader if explicitly loading
    if (isLoading) {
      return (
        <CircularProgress
          size={24}
          sx={{
            color: "#F98D31",
            alignSelf: { sm: "center", md: "flex-start" }
          }}
        />
      )
    }

    // Show loader if value is undefined, null, or NaN (indicating still fetching)
    if (cardValue === undefined || cardValue === null || Number.isNaN(cardValue)) {
      return (
        <CircularProgress
          size={24}
          sx={{
            color: "#F98D31",
            alignSelf: { sm: "center", md: "flex-start" }
          }}
        />
      )
    }

    // Handle profile complete logic
    if (isProfileComplete) {
      return cardValue
    }

    // Show 0 for zero values, otherwise show the actual value
    return cardValue === 0 ? "0" : cardValue
  }

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
          fontSize: {
            xs: pxToRem(16),
            sm: pxToRem(18),
            md: pxToRem(24)
          },
          fontWeight: {xs:600, md: 700},
          color: "#000000",
          lineHeight: "120%",
          textAlign: {sm: "center",md: "left"},
          display: "flex",
          alignItems: "center",
          justifyContent: { sm: "center", md: "flex-start" }
        }}
      >
        {renderCardValue()}
      </Typography>
    </Stack>
  )
}