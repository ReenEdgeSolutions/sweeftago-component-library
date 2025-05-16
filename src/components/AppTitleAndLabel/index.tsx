import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"

interface AppTitleAndDescProps {
  title: string
  label: string
}

export const AppTitleAndLabel = ({
  title,
  label,
}: AppTitleAndDescProps) => {
  return(
    <Stack spacing="8px">
      <Typography
        sx={{
          fontSize: pxToRem(20),
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