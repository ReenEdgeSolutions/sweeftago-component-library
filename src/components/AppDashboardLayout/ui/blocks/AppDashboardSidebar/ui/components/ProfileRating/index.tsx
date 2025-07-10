import { Box, Stack, Typography } from "@mui/material"
import { pxToRem } from "../../../../../../../../common"
import { StyledRating } from "../StyledRating"
import { StaticImageData } from "next/image"

interface ProfileRatingProps {
  ratePercent: number
  ratingItems: {
    text: string
    isCompleted: boolean
    percentage: number
  }[]
  open: boolean
  isMobile: boolean
  rateIcon: string | StaticImageData | React.ElementType;
}

export const ProfileRating = ({
  ratePercent,
  ratingItems,
  open,
  isMobile,
  // rateIcon
}: ProfileRatingProps) => {
  return (
    <Stack
      sx={{
        border: open? "1px solid #D6D4D1"  :"none",
        borderRadius: "10px",
        p: open ? "16px": 0,
        gap: open ? "16px": "40px",
        width: "100%",
        mt: open? 0 : "40px"
      }}
    >
      {(!open && !isMobile) ? (
        <Box
          sx={{
            width: "50px",
            height: "50px",
            border: "7px solid #0AA65D",
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
      ): (
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
      )}
      <Stack spacing={"16px"}>
        {ratingItems.map((item, index) => (
          <StyledRating
            key={index}
            text={item.text}
            isInfoCompleted={item.isCompleted}
            percentage={item.percentage}
            open={open}
            // rateIcons={rateIcon}
          />
        ))}
      </Stack>
    </Stack>
  )
}