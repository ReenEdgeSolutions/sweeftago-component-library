import { Typography } from "@mui/material"
import { pxToRem } from "../../../../../../../../common"
import { RowStack } from "../../../../../../../RowStack"
import { StyledImage } from "../../../../../../../StyledImage"
import checkedIcon from '../../assets/icons/checked.svg'

interface StyledRatingProps {
  isInfoCompleted: boolean
  text: string
  percentage: number
  open: boolean
}

export const StyledRating = ({
  isInfoCompleted,
  text,
  percentage,
  open
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
          {open ? text : text.charAt(0).toUpperCase()}
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