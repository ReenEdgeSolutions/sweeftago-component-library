"use client";
import { Box, Stack, useTheme, useMediaQuery, Drawer } from "@mui/material";
import {
  AppDashboardHeader,
  AppDashboardHeaderProps,
  AppDashboardSidebar,
  AppDashboardSidebarProps,
  SIDEBAR_WIDTH,
  COLLAPSED_WIDTH,
} from "./ui/blocks";
import { PropsWithChildren, useState, useEffect } from "react";
import { MenuButton } from "./ui/blocks/AppDashboardSidebar/ui/components";

export type AppDashboardLayoutProps = PropsWithChildren & {
  headerProps: AppDashboardHeaderProps;
  sidebarProps: Omit<AppDashboardSidebarProps, "open">;
};

export function AppDashboardLayout({
  children,
  headerProps,
  sidebarProps,
}: AppDashboardLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(!isMobile);
    setMobileDrawerOpen(false);
  }, [isMobile]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const getMainContentWidth = () => {
    if (isMobile) return "100%";
    return sidebarOpen
      ? `calc(100% - ${SIDEBAR_WIDTH}px)`
      : `calc(100% - ${COLLAPSED_WIDTH}px)`;
  };

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        flexDirection: "row",
      }}
    >
      {/* Desktop Sidebar */}
      {!isMobile && (
        <AppDashboardSidebar {...sidebarProps} open={sidebarOpen} />
      )}

      {/* Mobile Drawer Sidebar */}
      <Drawer
        anchor="left"
        open={mobileDrawerOpen}
        onClose={handleMobileDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            border: "none",
          },
        }}
      >
        <AppDashboardSidebar
          {...sidebarProps}
          open={sidebarOpen}
          isMobileDrawer={true}
          // onMobileClose={handleMobileDrawerToggle}
          // handleDeactivateAccount={sidebarProps.handleDeactivateAccount}
          // handleLogout={sidebarProps.handleLogout}
          mobileProfileProps={
            headerProps.profileProps
              ? {
                  firstName: headerProps.profileProps.firstName,
                  lastName: headerProps.profileProps.lastName,
                  userMail: headerProps.profileProps.userMail,
                  profileClick: headerProps.profileProps.profileClick,
                }
              : undefined
          }
        />
      </Drawer>

      {/* Menu Toggle Button (Only for Desktop) */}
      {!isMobile && (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <MenuButton
            onClick={handleSidebarToggle}
            isMenuOpen={sidebarOpen}
          />
        </Box>
      )}

      {/* Main Section: Header + Content */}
      <Stack
        sx={{
          flexGrow: 1,
          width: getMainContentWidth(),
        }}
      >
        <AppDashboardHeader
          {...headerProps}
          onMobileMenuToggle={handleMobileDrawerToggle}
        />

        <Box
          sx={{
            paddingX: { xs: "16px", sm: "20px", md: "35px" },
            overflowY: "auto",
            paddingTop: "30px",
            paddingBottom: "70px",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  );
}
