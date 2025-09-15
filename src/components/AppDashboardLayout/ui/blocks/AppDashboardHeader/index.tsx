import { alpha, AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { RowStack } from "../../../../RowStack";
import { Profile, ProfileProps } from "./ui/components";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import whatsApp from '../../assets/icons/whatsapp.svg';
import { StyledImage } from "../../../../StyledImage";
import { pxToRem, useResponsive } from "../../../../../common";
import { ReactNode } from "react";
import { AppLogo } from "../../../../AppLogo";
import { AppSearchField } from "../../../../TextField";
import { Centered } from "../../../../Centered";
import { NotificationsNone } from "@mui/icons-material";

export type AppDashboardHeaderProps = {
  profileProps: ProfileProps;
  onChatToggle?: () => void;
  onMobileMenuToggle?: () => void;
  showProfile?: boolean;
  showHome?: boolean;
  children?: ReactNode
  showHeaderLogo?: boolean;
  showSearch?: boolean;
  handleSearchClick?: () => void;
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showWhatsappChat?: boolean;
  ShowNotification?: boolean;
  notificationsCount?: number;
  notificationClick?: () => void;
};

export function AppDashboardHeader({
  profileProps,
  onChatToggle,
  onMobileMenuToggle,
  showProfile = true,
  showHome,
  children,
  showHeaderLogo = false,
  showSearch = false,
  handleSearchClick,
  handleSearchChange,
  showWhatsappChat = true,
  ShowNotification = false,
  notificationsCount,
  notificationClick,
}: AppDashboardHeaderProps) {
  const { isMobile, isHydrating } = useResponsive();

  // Common toolbar content to avoid duplication
  const renderToolbarContent = (isMobileLayout: boolean) => (
    <RowStack
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        padding: isMobileLayout ? "12px 16px" : "0",
        paddingX: isMobileLayout ? "12px 16px" : "35px",
      }}
    >
      <RowStack spacing={isMobileLayout ? "20px" : 0} flex={isMobileLayout ? 1 : "unset"}>
        {/* Mobile menu button */}
        {isMobileLayout && (
          <IconButton
            onClick={onMobileMenuToggle}
            sx={{
              padding: '8px',
              color: '#615D5D',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop logo */}
        {!isMobileLayout && showHeaderLogo && (
          <Box mr="30px" borderRight="1px solid #D6D4D1">
            <AppLogo sx={{width: "148px", height: "49.33px"}}/>
          </Box>
        )}

        {showHome && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: isMobileLayout ? pxToRem(16) : "16px",
              lineHeight: '24px',
              color: "#615D5D",
              variant: isMobileLayout ? undefined : "h6",
              display: isMobileLayout ? { xs: "block", sm: "none" } : { xs: "none", sm: "block" },
            }}
          >
            Home
          </Typography>
        )}
        {!showHome && children}
      </RowStack>

      <RowStack spacing={isMobileLayout ? 0 : "19px"} alignItems="center">
        {/* Search - Desktop only */}
        {!isMobileLayout && showSearch && (
          <Box maxWidth={"466px"} width="100%">
            <AppSearchField
              iconPosition="start"
              placeholder="Search"
              onClick={handleSearchClick}
              onChange={handleSearchChange}
              fullWidth
            />
          </Box>
        )}

        {/* WhatsApp Chat */}
        {showWhatsappChat && (
          <>
            {isMobileLayout ? (
              <IconButton onClick={onChatToggle}>
                <StyledImage
                  src={whatsApp}
                  alt="whatsapp icon"
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={onChatToggle}
                sx={{
                  backgroundColor: "#CFFFD2",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  "&:hover": {
                    backgroundColor: alpha("#CFFFD2", .8),
                  },
                }}
              >
                <RowStack spacing={1} alignItems="center">
                  <WhatsAppIcon />
                  <Typography
                    sx={{
                      color: "#252423",
                      fontSize: "16px",
                      fontWeight: 500,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Switch to chat
                  </Typography>
                </RowStack>
              </IconButton>
            )}
          </>
        )}

        {/* Notifications and Profile - Desktop only */}
        {!isMobileLayout && (
          <RowStack spacing={"15px"} alignItems={"center"}>
            {ShowNotification && (
              <Centered
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  background: "#E8E8E8",
                }}
              >
                <Badge badgeContent={notificationsCount || 0} color="error">
                  <IconButton onClick={notificationClick}>
                    <NotificationsNone />
                  </IconButton>
                </Badge>
              </Centered>
            )}

            {showProfile && <Profile {...profileProps} />}
          </RowStack>
        )}
      </RowStack>
    </RowStack>
  );

  return (
    <AppBar
      elevation={0}
      position={"relative"}
      sx={{
        background: "#F9F9F9",
        borderBottom: "1px solid #E1E1E1",
        p: 0
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          padding: 0,
          width: "100%",
          background: "#F9F9F9",
          height: isMobile ? "56px" : "101px",
          minHeight: isMobile ? "56px !important" : "101px !important",
          transition: isHydrating ? 'none' : 'all 0.3s ease',
        }}
      >
        {renderToolbarContent(isMobile)}
      </Toolbar>
    </AppBar>
  );
}