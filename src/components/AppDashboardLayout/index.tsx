"use client";
import { Box, Stack, Drawer } from "@mui/material";
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
import { useResponsive } from "../../common";

export type AppDashboardLayoutProps = PropsWithChildren & {
  headerProps: AppDashboardHeaderProps;
  sidebarProps: Omit<AppDashboardSidebarProps, "open">;
  showSideBar?: boolean;
};

export function AppDashboardLayout({
  children,
  headerProps,
  sidebarProps,
  showSideBar = true,
}: AppDashboardLayoutProps) {
  const { isMobile, isBelowLg, isDesktop, hasMounted } = useResponsive();

  // Desktop sidebar starts open, collapses below lg breakpoint
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Sync sidebar state with screen size after mount
  useEffect(() => {
    if (hasMounted) {
      setSidebarOpen(!isBelowLg);
    }
  }, [isBelowLg, hasMounted]);

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

  // Prevent flash of wrong layout - hide until mounted
  if (!hasMounted) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
          flexDirection: "row",
          visibility: "hidden",
        }}
      >
        {/* Render structure but hide it */}
        {showSideBar && <AppDashboardSidebar {...sidebarProps} open={true} />}
        <Stack sx={{ flexGrow: 1 }}>
          <AppDashboardHeader
            {...headerProps}
            onMobileMenuToggle={handleMobileDrawerToggle}
          />
          <Box sx={{ paddingX: "35px", paddingTop: "30px" }}>
            {children}
          </Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "row",
      }}
    >
      {/* Desktop Sidebar */}
      {isDesktop && showSideBar && (
        <AppDashboardSidebar {...sidebarProps} open={sidebarOpen} />
      )}

      {/* Mobile Drawer Sidebar */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={mobileDrawerOpen}
          onClose={handleMobileDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              border: "none",
              zIndex: 1500,
            },
            "& .MuiBackdrop-root": {
              zIndex: 1499,
            },
          }}
        >
          <AppDashboardSidebar
            {...sidebarProps}
            open={true}
            isMobileDrawer={true}
            onMobileClose={handleMobileDrawerToggle}
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
      )}

      {/* Menu Toggle Button (Desktop Only) */}
      {isDesktop && showSideBar && (
        <MenuButton onClick={handleSidebarToggle} isMenuOpen={sidebarOpen} />
      )}

      {/* Main Section: Header + Content */}
      <Stack
        sx={{
          flexGrow: 1,
          width: getMainContentWidth(),
          transition: "width 0.3s ease",
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