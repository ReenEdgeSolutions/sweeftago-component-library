import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../../src/common/utils"

interface AppTitleAndDescProps {
  title: string
  description: string
}

export const AppTitleAndDesc = ({
  title,
  description,
}: AppTitleAndDescProps) => {
  return(
    <Stack spacing="8px">
      <Typography
        sx={{
          fontSize: {
            xs: pxToRem(18),
            sm: pxToRem(20),
            md: pxToRem(24),
          },
          fontWeight: 600,
          lineHeight: "120%",
          color: "#252423",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: pxToRem(16),
            sm: pxToRem(18),
          },
          fontWeight: 400,
          lineHeight: "140%",
          color: "#797979",
        }}
      >
        {description}
      </Typography>
    </Stack>
  )
}