import { AppButton } from "../../../../AppButton"
import { RowStack } from "../../../../RowStack"
import { StyledImage } from "../../../../StyledImage"
import downloadIcon from "../../assets/icon/export.svg"

interface ActionButtonsProps {
  showSavedDraft?: boolean;
  handleViewSavedDraft?: () => void;
  showRequestsBtn?: boolean;
  requestsBtnText?: string;
  handleRequestsBtnClick?: () => void;
  handleExport: () => void;
}

export const ActionButtons = ({
  showSavedDraft,
  handleViewSavedDraft,
  showRequestsBtn,
  requestsBtnText,
  handleRequestsBtnClick,
  handleExport,
}: ActionButtonsProps) => {
  return(
    <RowStack alignItems={"center"} justifyContent={"space-between"} spacing="24px">
      {showRequestsBtn && (
        <AppButton
          onClick={handleRequestsBtnClick}
          disableArrow
          startIcon={"+"}
        >
          {requestsBtnText}
        </AppButton>
      )}

      <RowStack spacing={"24px"} alignItems={"center"}>
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
      </RowStack>

    </RowStack>
  )
}