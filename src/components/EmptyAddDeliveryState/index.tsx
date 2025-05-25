import { Box, Button, Stack, Typography } from "@mui/material";
import { StyledImage } from "../StyledImage";
import { pxToRem } from "../../common";
import deliveryBox from "./ui/assets/icon/empty-box.svg"

export interface EmptyAddDeliveryStateProps {
  handleCreateNewDelivery?: () => void;
  isSetUpCompletted: boolean;
  showCreateNewDeliveryBtn?: boolean;
  emptyDeliveryguideText: string;
}

export const EmptyAddDeliveryState = ({
  handleCreateNewDelivery,
  isSetUpCompletted,
  showCreateNewDeliveryBtn = false,
  emptyDeliveryguideText
}: EmptyAddDeliveryStateProps) => {
  return(
    <Stack
      direction="column"
      spacing={"23px"}
      sx={{ pb: 6, pt: 12 , width: "418px" ,mx: 'auto'}}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StyledImage
          src={deliveryBox}
          alt="Empty Delivery Box"
          sx={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
            mb: 2,
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: '140%',
          color: '#615D5D',
          mb: 1
        }}
      >
        {emptyDeliveryguideText}
      </Typography>

      {showCreateNewDeliveryBtn && (
        <Button
          variant="text"
          sx={{
            color: "#F98D31",
            padding: "0px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:active": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
          disabled={!isSetUpCompletted}
          onClick={handleCreateNewDelivery}
        >
          Create New Delivery
        </Button>
      )}
    </Stack>
  );
}