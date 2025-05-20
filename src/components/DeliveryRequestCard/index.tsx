import { Stack, Typography } from "@mui/material"
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
  return(
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "16px 24px",
        border: "1px solid #D6D4D1",
        gap: "24px",
      }}
    >
      <RowStack spacing="24px" alignItems="center">
        <RowStack spacing="16px">
        <Typography
            sx={{
              padding: "4px 8px",
              fontSize: pxToRem(12),
              fontWeight: 400,
              color: color,
              backgroundColor: bgColor,
            }}
          >
            {status}
          </Typography>

          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "140%",
              color: "#797979",
              textTransform: "capitalize",
              pr: "16px",
              borderRight: "1px solid #D6D4D1",
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
      </RowStack>

      <RowStack justifyContent="space-between" alignItems={"center"}>
        <RowStack>
          <Typography
            sx={{
              fontSize: pxToRem(16),
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
            }}
          />

          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "140%",
              color: "#615D5D",
            }}
          >
            Dropoff : {dropOffLocation}
          </Typography>
        </RowStack>

        <AppButton
          onClick={() => handleViewDetails(deliveryId)}
          sx={{
            backgroundColor: "transparent",
            fontSize: pxToRem(16),
            fontWeight: 500,
            lineHeight: "150%",
            color: "#F98D31",
            p: 0,
            textAlign: "right",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {'>>'}View Details
        </AppButton>
      </RowStack>
    </Stack>
  )
}