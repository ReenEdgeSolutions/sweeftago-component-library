import { pxToRem } from "../../common/utils";
import { RowStack } from "../RowStack"
import { Box, Typography } from '@mui/material';
import { AppButton } from "../AppButton";
import { StyledImage } from "../StyledImage";
import downloadIcon from "./ui/assets/icon/export.svg"
import sortIcon from "./ui/assets/icon/sort.svg"
import filterIcon from "./ui/assets/icon/filter.svg"
import arrowIcon from "./ui/assets/icon/arrow-down.svg"

export interface AppDeliveryPanelProps {
  panelTitle?: string;
  handleExport?: () => void;
  handleViewSavedDraft?: () => void;
  requestsBtnText?: string;
  handleRequestsBtnClick?: () => void;
  showSavedDraft?: boolean;
  isTransaction?: boolean
  handleFilterClick?: () => void;
  handleSortClick?: () => void;
  showRequestsBtn?: boolean;
}

export const AppDeliveryPanel = ({
  panelTitle,
  handleExport,
  handleViewSavedDraft,
  requestsBtnText,
  handleRequestsBtnClick,
  showSavedDraft = false,
  isTransaction = false,
  handleFilterClick,
  handleSortClick,
  showRequestsBtn = true
}: AppDeliveryPanelProps) => {
  return(
    <Box>
      {!isTransaction && (
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
            {showRequestsBtn && (
              <AppButton
                onClick={handleRequestsBtnClick}
                disableArrow
                startIcon={"+"}
              >
                {requestsBtnText}
              </AppButton>
            )}

          </RowStack>
        </RowStack>
      )}

      {isTransaction && (
        <RowStack justifyContent="space-between" alignItems="center" mb="21px">
          <AppButton
            startIcon={
              <StyledImage
                src={filterIcon}
                alt="filter"
                sx={{
                  width: "24px",
                  height: "24px",
                  marginRight: "10px",
                }}
              />
            }
            endIcon={
              <StyledImage
                src={arrowIcon}
                alt="arrow"
                sx={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "10px",
                }}
              />
            }
            sx={{
              color: "#615D5D",
              p: "12px 16px",
              border: "1px solid #D5D5D5",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={handleFilterClick}
            disableArrow
          >
            Filter by status
          </AppButton>

          <AppButton
            startIcon={
              <StyledImage
                src={sortIcon}
                alt="filter"
                sx={{
                  width: "24px",
                  height: "24px",
                  marginRight: "10px",
                }}
              />
            }
            endIcon={
              <StyledImage
                src={arrowIcon}
                alt="arrow"
                sx={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "10px",
                }}
              />
            }
            sx={{
              color: "#615D5D",
              p: "12px 16px",
              border: "1px solid #D5D5D5",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={handleSortClick}
            disableArrow
          >
            Sort by Date
          </AppButton>
        </RowStack>
      )}
    </Box>
  )
}