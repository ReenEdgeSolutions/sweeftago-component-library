import { Box, IconButton, Stack, Typography, useTheme, useMediaQuery } from "@mui/material"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
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
  showStartTime?: boolean
  startTime?: string
  onMoreOptionsClick?: (event: React.MouseEvent<HTMLButtonElement>, deliveryId?: string) => void
  showActionButton?: boolean
  showViewDetails?: boolean
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
  showViewDetails = true,
  status,
  color,
  bgColor,
  showStartTime = false,
  startTime,
  handleViewDetails,
  onMoreOptionsClick,
  showActionButton = false,
}: DeliveryRequestCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: {xs:"16px 12px", sm: "16px 24px"},
        border: "1px solid #D6D4D1",
        gap: {xs: "20px", sm: "24px"},
        position: "relative",
      }}
    >

      {isMobile && showActionButton && (
        <IconButton
          onClick={(event) => onMoreOptionsClick && onMoreOptionsClick(event, deliveryId)}
          sx={{
            position: "absolute",
            top: "16px",
            right: "12px",
            p: 0,
            zIndex: 1,
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      )}

      <Stack
        direction={{xs: "column", sm: "row"}}
        spacing={{xs:"12px", sm: "24px"}}
        alignItems={{xs: "flex-start", sm: "center"}}
      >
        <RowStack sx={{
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}>
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
        </RowStack>

        <RowStack spacing={{xs:"8px", lg: "50px"}} alignItems={"center"} ml={{xs: 0, lg: "50px"}}>
          <LabelAndImg
            icon={amountIcon}
            label={`₦${amount}`}
          />

          {/* {!isMobile && (
            <Box mx="30px"></Box>
          )} */}

          <Box ml={{xs: 0, lg: "-50px"}} display="flex" alignItems="center">
            <LabelAndImg
              icon={distanceIcon}
              label={timeAway}
            />
          </Box>

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

        {showStartTime && (
          <Typography
            sx={{
              fontSize: {xs: pxToRem(14),md:pxToRem(16)},
              fontWeight: 400,
              lineHeight: "140%",
              color: "#615D5D",
            }}
          >
            Delivery Start Time : {startTime}
          </Typography>
        )}

        <Stack
          direction={{xs: "column", sm: "row"}}
          spacing={{xs:"10px", sm: "24px", lg: "50px"}}
          alignItems={{xs: "flex-start", sm: "center"}}
          sx={{
            pl: {xs: 0, lg: "108px"}
          }}
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

        {showViewDetails && (
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
        )}
      </Stack>
    </Stack>
  )
}