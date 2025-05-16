import { pxToRem } from "../../common/utils";
import { RowStack } from "../RowStack"
import { Typography } from '@mui/material';
import { AppButton } from "../AppButton";
import { StyledImage } from "../StyledImage";
import downloadIcon from "./ui/assets/icon/export.svg"

interface AppDeliveryPanelProps {
  panelTitle: string;
  handleExport: () => void;
  handleViewSavedDraft: () => void;
  requestsBtnText: string;
  handleRequestsBtnClick: () => void;
  showSavedDraft: boolean;
}

export const AppDeliveryPanel = ({
  panelTitle,
  handleExport,
  handleViewSavedDraft,
  requestsBtnText,
  handleRequestsBtnClick,
  showSavedDraft = false
}: AppDeliveryPanelProps) => {
  return(
    <RowStack justifyContent="space-between" alignItems="center">
      <Typography
        sx={{
          fontSize: pxToRem(20),
          fontWeight: 500,
          lineHeight: '120%',
          padding: '16px 0',
          color: '#252423'
        }}
      >
        {panelTitle}
      </Typography>

      <RowStack spacing={"24px"} alignItems={"center"}>
        <AppButton
          onClick={handleExport}
          disableArrow
          startIcon={
            <StyledImage
              src={downloadIcon}
              alt="download"
              sx={{
                width: "24px",
                height: "24px",
                marginRight: "10px",
              }}
            />
          }
          sx={{
            color: "#615D5D",
            border: "1px solid #D5D5D5",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Export
        </AppButton>

        {showSavedDraft && (
          <AppButton
            onClick={handleViewSavedDraft}
            disableArrow
            sx={{
              color: "#252423",
              border: "1px solid #F98D31",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            View Saved Draft
          </AppButton>
        )}

        <AppButton
          onClick={handleRequestsBtnClick}
          disableArrow
          startIcon={"+"}
        >
          {requestsBtnText}
        </AppButton>
      </RowStack>
    </RowStack>
  )
}