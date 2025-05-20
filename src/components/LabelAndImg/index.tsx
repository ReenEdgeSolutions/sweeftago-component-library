import { Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { RowStack } from "src/components/RowStack"
import { StyledImage } from "../StyledImage"

interface LabelAndImgProps {
  icon: string
  label: string
}

export const LabelAndImg = ({
  icon,
  label,
}: LabelAndImgProps) => {
  return(
    <RowStack spacing={"8px"} alignItems="center">
      <StyledImage
        src={icon}
        alt="icon"
        sx={{
          width: "28px",
          height: "28px",
        }}
      />

      <Typography
        sx={{
          fontSize: pxToRem(14),
          fontWeight: 500,
          lineHeight: "130%",
          color: "#615D5D",
        }}
      >
        {label}
      </Typography>
    </RowStack>
  )
}