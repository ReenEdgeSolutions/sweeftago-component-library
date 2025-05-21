import { Typography } from "@mui/material"
import { pxToRem } from "src/common"
import { RowStack } from "src/components/RowStack"
import { StyledImage } from "src/components/StyledImage"
import checkedIcon from '../../assets/icons/checked.svg'

interface StyledRatingProps{
  isInfoCompleted: boolean
  text: string
}

export const StyledRating = ({
  isInfoCompleted,
  text
}: StyledRatingProps) => {
  return(
    <RowStack spacing={"10px"} alignItems={"center"} justifyContent={"space-between"}>
      {isInfoCompleted && (
        <StyledImage
          src={checkedIcon}
          alt="rate Icon"
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      )}

      <Typography
        sx={{
          fontSize: pxToRem(14),
          fontweight: 400,
          lineHeight: "140%",
          color: "#615D5D"
        }}
      >
        {text}
      </Typography>

      <Typography
        sx={{
          fontSize: pxToRem(18),
          fontweight: 400,
          lineHeight: "130%",
          color: "#615D5D"
        }}
      >
        50%
      </Typography>
    </RowStack>
  )
}