import { Typography } from "@mui/material"
import { pxToRem } from "src/common"
import { RowStack } from "src/components/RowStack"
import { StyledImage } from "src/components/StyledImage"
import checkedIcon from '../../assets/icons/checked.svg'

interface StyledRatingProps {
  isInfoCompleted: boolean
  text: string
  percentage: number
}

export const StyledRating = ({
  isInfoCompleted,
  text,
  percentage
}: StyledRatingProps) => {
  return (
    <RowStack spacing={"10px"} alignItems={"center"} justifyContent={"space-between"}>
      <RowStack spacing={"10px"} alignItems={"center"}>
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
            fontWeight: 400,
            lineHeight: "140%",
            color: "#615D5D"
          }}
        >
          {text}
        </Typography>
      </RowStack>

      <Typography
        sx={{
          fontSize: pxToRem(18),
          fontWeight: 400,
          lineHeight: "130%",
          color: "#615D5D"
        }}
      >
        {percentage}%
      </Typography>
    </RowStack>
  )
}