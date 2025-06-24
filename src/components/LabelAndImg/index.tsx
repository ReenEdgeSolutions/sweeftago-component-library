import { Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { RowStack } from "../RowStack"
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
          width: {xs:"24px", md:"28px"},
          height: {xs:"24px", md:"28px"},
        }}
      />

      <Typography
        sx={{
          fontSize: {xs:pxToRem(12), md: pxToRem(14)},
          fontWeight: {xs:400, md: 500},
          lineHeight: {xs:"140%", md: "130%"},
          color: "#615D5D",
        }}
      >
        {label}
      </Typography>
    </RowStack>
  )
}