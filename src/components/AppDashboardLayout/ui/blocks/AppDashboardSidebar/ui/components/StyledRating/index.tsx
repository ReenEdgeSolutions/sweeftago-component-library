
import { Typography } from "@mui/material"
import { pxToRem } from "../../../../../../../../common"
import { RowStack } from "../../../../../../../RowStack"
import { StyledImage } from "../../../../../../../StyledImage"
import checkedIcon from '../../assets/icons/checked.svg'
// import { StaticImageData } from "next/image"

interface StyledRatingProps {
  isInfoCompleted: boolean
  text: string
  percentage: number
  open: boolean
  // rateIcons: string | StaticImageData | React.ElementType;
}

export const StyledRating = ({
  isInfoCompleted,
  text,
  percentage,
  open,
  // rateIcons,
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

        {open && (
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
        )}

        {/* {open ? (
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
        ) : (
          <>
            {typeof rateIcons === "string" || rateIcons instanceof Object ? (
              <StyledImage
                src={typeof rateIcons === "object" && "src" in rateIcons ? rateIcons.src : ""}
                alt="rate Icon"
                sx={{ width: "20px", height: "20px" }}
              />
            ) : (
              React.createElement(rateIcons, { style: { width: 20, height: 20 } })
            )}
          </>

        )} */}
      </RowStack>

      {open && (
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
      )}
    </RowStack>
  )
}