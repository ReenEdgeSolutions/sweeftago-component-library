import { Box, Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { LabelAndImg } from "../LabelAndImg"
import { RowStack } from "../RowStack"
import { AppButton } from "../AppButton"
import { StyledImage } from "../StyledImage"

interface DeliveryRequestCardProps {
  deliveryId: string
  amount: string
  arrowIcon: string
  timeAway: string
  driver: string
  driverIcon: string
  pickUpLocation: string
  dropOffLocation: string
  amountIcon: string
  distanceIcon: string
  status: string
  color: string
  bgColor: string
  handleViewDetails: (id: string) => void
}

export const DeliveryRequestCard = ({
  deliveryId,
  amount,
  pickUpLocation,
  dropOffLocation,
  amountIcon,
  distanceIcon,
  arrowIcon,
  timeAway,
  driver,
  driverIcon,
  status,
  color,
  bgColor,
  handleViewDetails,
}: DeliveryRequestCardProps) => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: {xs:"16px 12px", sm: "16px 24px"},
        border: "1px solid #D6D4D1",
        gap: {xs: "20px", sm: "24px"},
      }}
    >
      <Stack
        direction={{xs: "column", sm: "row"}}
        spacing={{xs:"12px", sm: "24px"}}
        alignItems={{xs: "flex-start", sm: "center"}}
      >
        <RowStack spacing="16px">
          <Box width="92px" display="flex" alignItems="center" justifyContent="center" >
            <Typography
              sx={{
                padding: "4px 8px",
                fontSize: pxToRem(12),
                fontWeight: 400,
                color: color,
                backgroundColor: bgColor,
                width: "100%",
                textAlign: "center",
              }}
            >
              {status}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: {xs: pxToRem(14), sm: pxToRem(14)},
              fontWeight: 400,
              lineHeight: "140%",
              color: "#797979",
              textTransform: "capitalize",
              pr: "16px",
              borderRight: {xs:"none" ,sm: "1px solid #D6D4D1"},
            }}
          >
            {deliveryId}
          </Typography>
        </RowStack>

        <RowStack spacing="8px" alignItems={"center"}>
          <LabelAndImg
            icon={amountIcon}
            label={`#${amount}`}
          />

          <LabelAndImg
            icon={distanceIcon}
            label={timeAway}
          />

          <LabelAndImg
            icon={driverIcon}
            label={driver}
          />
        </RowStack>
      </Stack>

      <Stack
        direction={{xs: "column", sm: "row"}}
        spacing={{xs:"12px", md: "24px"}}
        alignItems={{xs: "flex-start", sm: "center"}}
        justifyContent={{xs: "flex-start", sm: "space-between"}}
      >
        <Stack
          direction={{xs: "column", sm: "row"}}
          spacing={{xs:"10px", sm: "24px"}}
          alignItems={{xs: "flex-start", sm: "center"}}
        >
          <Typography
            sx={{
              fontSize: {xs: pxToRem(14),md:pxToRem(16)},
              fontWeight: 400,
              lineHeight: "140%",
              color: "#615D5D",
            }}
          >
            Pickup : {pickUpLocation}
          </Typography>

          <StyledImage
            src={arrowIcon}
            alt="arrow"
            sx={{
              width: "31px",
              height: "22px",
              margin: "0 24px",
              display: {xs: "none", sm: "block"},
            }}
          />

          <Typography
            sx={{
              fontSize: {xs: pxToRem(14),md:pxToRem(16)},
              fontWeight: 400,
              lineHeight: "140%",
              color: "#615D5D",
            }}
          >
            Dropoff : {dropOffLocation}
          </Typography>
        </Stack>

        <Box alignSelf={{xs: "flex-end"}} ml="auto">
          <AppButton
            onClick={() => handleViewDetails(deliveryId)}
            sx={{
              backgroundColor: "transparent",
              fontSize: {xs: pxToRem(14)},
              fontWeight: 500,
              lineHeight: "150%",
              color: "#F98D31",
              p: 0,
              textAlign: "right",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            disableArrow
          >
            {'>>'}View Details
          </AppButton>
        </Box>
      </Stack>
    </Stack>
  )
}