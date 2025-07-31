"use client"
import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../../../../common/utils"
import { RowStack } from "../../../../RowStack"
import { StyledImage } from "../../../../StyledImage"
import arrow from "../../assets/icon/arrow.svg"
import { StaticImageData } from "next/image"

interface CardsProps {
  background: string
  cardLabel: string
  cardValue: string | number
  isProfileComplete?: boolean
  enableAdminCard?: boolean
  labelIcon?: string | StaticImageData
  rightIcon?: string | StaticImageData
  EnableTextIcon?: boolean
  textIconColor?: string
  showRightItems?: boolean
  rightText?: string
}

export const Cards = ({
  background,
  cardLabel,
  cardValue,
  isProfileComplete = false,
  enableAdminCard = false,
  labelIcon ,
  rightIcon = arrow,
  EnableTextIcon = false,
  textIconColor,
  showRightItems = true,
  rightText
}: CardsProps) => {

  return (
    <>
      {!enableAdminCard ? (
        <Stack
          sx={{
            p: {xs: "12px 16px" ,sm: "16px 24px"},
            gap: {xs: "8px", md:"16px"} ,
            height: "100%",
            background: background,
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: pxToRem(14),
                md: pxToRem(16)
              },
              fontWeight: 500,
              color: "#615D5D",
              lineHeight: "140%",
              textAlign: {sm: "center",md: "left"}
            }}
          >
            {cardLabel}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: pxToRem(16),
                sm: pxToRem(18),
                md: pxToRem(24)
              },
              fontWeight: {xs:600, md: 700},
              color: "#000000",
              lineHeight: "120%",
              textAlign: {sm: "center",md: "left"},
              display: "flex",
              alignItems: "center",
              justifyContent: { sm: "center", md: "flex-start" }
            }}
          >
            {isProfileComplete ? cardValue : "0"}
          </Typography>
        </Stack>
      ): (
        <Stack
          sx={{
            p: {xs: "12px 16px" ,sm: "16px 24px"},
            gap: {xs: "8px", md:"16px"} ,
            height: "100%",
            background: background,
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <RowStack justifyContent={"space-between"} alignItems={"center"}>
              <RowStack spacing={"4px"} flex={1} alignItems={"center"}>
              <StyledImage
                src={labelIcon || ""}
                alt= {`${cardLabel} icon`}
                sx={{
                  width: "32px",
                  height: "32px",
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: pxToRem(14),
                    md: pxToRem(16)
                  },
                  fontWeight: 500,
                  color: "#615D5D",
                  lineHeight: "140%",
                  textAlign: {sm: "center",md: "left"}
                }}
              >
                {cardLabel}
              </Typography>
            </RowStack>

            {showRightItems && (
              <RowStack spacing={"4px"}>
                <StyledImage
                  src={rightIcon}
                  alt="arrow icon"
                  sx={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "auto"
                  }}
                />

                {EnableTextIcon && (
                  <Typography
                    sx={{
                      fontSize: pxToRem(14),
                      fontWeight: 500,
                      color: textIconColor,
                      lineHeight: "140%",
                    }}
                  >
                    {rightText}
                  </Typography>
                )}
              </RowStack>
            )}
          </RowStack>

          <Typography
            sx={{
              fontSize: {
                xs: pxToRem(16),
                sm: pxToRem(18),
                md: pxToRem(24)
              },
              fontWeight: {xs:600, md: 700},
              color: "#000000",
              lineHeight: "120%",
              textAlign: {sm: "center",md: "left"},
              display: "flex",
              alignItems: "center",
              justifyContent: { sm: "center", md: "flex-start" }
            }}
          >
            {cardValue}
          </Typography>
        </Stack>
      )}
    </>

  )
}