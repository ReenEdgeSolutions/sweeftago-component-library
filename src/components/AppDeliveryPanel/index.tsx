import { useState } from 'react';
import { pxToRem } from "../../common/utils";
import { RowStack } from "../RowStack"
import {
  Box,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { StyledImage } from "../StyledImage";
import downloadIcon from "./ui/assets/icon/export.svg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ActionButtons, TransactionButtons } from './ui/components';
import { AppButton } from '../AppButton';

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
  const isMobile = useMediaQuery('(max-width:576px)');
  const isTablet = useMediaQuery('(min-width:577px) and (max-width:768px)');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Mobile Popover Menu Items - Using actual desktop button functionality
  const mobileMenuItems = [
    ...(showSavedDraft ? [{
      text: 'View Saved Draft',
      icon: <StyledImage
        src={downloadIcon}
        alt="draft"
        sx={{
          width: "20px",
          height: "20px",
        }}
      />,
      onClick: () => {
        handleViewSavedDraft?.();
        handleMenuClose();
      }
    }] : []),
    {
      text: 'Export',
      icon: <StyledImage
        src={downloadIcon}
        alt="export"
        sx={{
          width: "20px",
          height: "20px",
        }}
      />,
      onClick: () => {
        handleExport?.();
        handleMenuClose();
      }
    }
  ];


  return (
    <Box>
      {!isTransaction && (
        <>
          {/* Mobile Layout */}
          {isMobile && (
            <RowStack justifyContent="space-between" alignItems="center" sx={{ padding: '16px 0' }}>
              <Typography
                sx={{
                  fontSize: pxToRem(20),
                  fontWeight: 500,
                  lineHeight: '120%',
                  color: '#252423'
                }}
              >
                {panelTitle}
              </Typography>

              <IconButton
                onClick={handleMenuClick}
                sx={{
                  color: '#666',
                  padding: '8px',
                }}
              >
                <MoreVertIcon />
              </IconButton>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  '& .MuiPopover-paper': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                    minWidth: '180px',
                    mt: 1
                  }
                }}
              >
                <List sx={{
                  padding: 0,
                  backgroundColor: 'transparent',
                  gap: '8px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {mobileMenuItems.map((item, index) => (
                    <ListItem
                      key={index}
                      onClick={item.onClick}
                      sx={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#FEE8D6',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                        cursor: 'pointer',
                        margin: 0,
                        '&:hover': {
                          backgroundColor: '#fed7c3' 
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '14px',
                            color: '#252423'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Popover>
            </RowStack>
          )}

          {/* Tablet Layout */}
          {isTablet && (
            <Box>
              <Typography
                sx={{
                  fontSize: pxToRem(20),
                  fontWeight: 500,
                  lineHeight: '120%',
                  padding: '16px 0 12px 0',
                  color: '#252423'
                }}
              >
                {panelTitle}
              </Typography>

              <Box sx={{ paddingBottom: '16px' }}>
                <ActionButtons
                  showSavedDraft={showSavedDraft}
                  handleViewSavedDraft={handleViewSavedDraft}
                  showRequestsBtn={showRequestsBtn}
                  requestsBtnText={requestsBtnText}
                  handleRequestsBtnClick={handleRequestsBtnClick}
                  handleExport={handleExport || (() => {})}
                />
              </Box>
            </Box>
          )}

          {/* Desktop Layout */}
          {!isMobile && !isTablet && (
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

              <ActionButtons
                showSavedDraft={showSavedDraft}
                handleViewSavedDraft={handleViewSavedDraft}
                showRequestsBtn={showRequestsBtn}
                requestsBtnText={requestsBtnText}
                handleRequestsBtnClick={handleRequestsBtnClick}
                handleExport={handleExport || (() => {})}
              />
            </RowStack>
          )}
        </>
      )}

      {isTransaction && (
        <TransactionButtons
          handleFilterClick={handleFilterClick || (() => {})}
          handleSortClick={handleSortClick || (() => {})}
        />
      )}

      {isMobile && showRequestsBtn && (
        <Box
          sx={{
            position: 'fixed',
            top: "70%",
            right: 20,
            transform: 'translateY(-50%)',
          }}
        >
          <AppButton
            disableArrow
            onClick={handleRequestsBtnClick}
            sx={{
              fontSize: pxToRem(32),
              lineHeight: "140%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: " 0px 1px 2px rgba(173, 172, 172, 0.71)"
            }}
          >
            +
          </AppButton>
        </Box>
      )}
    </Box>
  )
}