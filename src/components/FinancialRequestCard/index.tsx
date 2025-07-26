import { Box, Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { LabelAndImg } from "../LabelAndImg"
import { RowStack } from "../RowStack"

interface FinancialRequestCardProps {
  date: string
  deliveryId: string
  rider: string
  totalCharge: string
  platformFee: string
  riderEarnings: string
  status: string
  color: string
  bgColor: string
  amountIcon: string
  riderIcon: string
}

export const FinancialRequestCard = ({
  date,
  deliveryId,
  rider,
  totalCharge,
  platformFee,
  riderEarnings,
  status,
  color,
  bgColor,
  amountIcon,
  riderIcon,
}: FinancialRequestCardProps) => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "16px 12px",
        border: "1px solid #D6D4D1",
        gap: "20px",
      }}
    >
      <Stack spacing="12px">
        <RowStack sx={{
          alignItems: "center",
          width: "100%",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
          <RowStack spacing="16px">
            <Box width="92px" display="flex" alignItems="center" justifyContent="center">
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
                fontSize: pxToRem(14),
                fontWeight: 400,
                lineHeight: "140%",
                color: "#797979",
                textTransform: "capitalize",
              }}
            >
              {deliveryId}
            </Typography>
          </RowStack>
        </RowStack>

        <RowStack spacing="8px" alignItems="center">
          <LabelAndImg
            icon={amountIcon}
            label={`₦${totalCharge}`}
          />

          <LabelAndImg
            icon={riderIcon}
            label={rider}
          />

          <Typography
            sx={{
              fontSize: pxToRem(12),
              fontWeight: 400,
              lineHeight: "140%",
              color: "#797979",
              padding: "2px 6px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
            }}
          >
            {date}
          </Typography>
        </RowStack>
      </Stack>

      <Stack spacing="10px">
        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 400,
            lineHeight: "140%",
            color: "#615D5D",
          }}
        >
          Platform Fee : ₦{platformFee}
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "140%",
            color: "#615D5D",
          }}
        >
          Rider Earnings : ₦{riderEarnings}
        </Typography>
      </Stack>
    </Stack>
  )
}