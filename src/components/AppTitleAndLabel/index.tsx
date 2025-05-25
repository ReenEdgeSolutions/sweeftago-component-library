import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"

interface AppTitleAndDescProps {
  title: string
  label: string
  fontSize?: string | number
}

export const AppTitleAndLabel = ({
  title,
  label,
  fontSize = pxToRem(20)
}: AppTitleAndDescProps) => {
  return(
    <Stack spacing="8px">
      <Typography
        sx={{
          fontSize: fontSize,
          fontWeight: 500,
          lineHeight: "120%",
          color: "#252423",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: "140%",
          color: "#615D5D",
        }}
      >
        {label}
      </Typography>
    </Stack>
  )
}