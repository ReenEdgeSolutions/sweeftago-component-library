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
  const { isMobile, isBelowLg, hasMounted } = useResponsive();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (hasMounted) {
      setSidebarOpen(!isBelowLg);
      setMobileDrawerOpen(false);
    }
  }, [isBelowLg, hasMounted]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const getMainContentWidth = () => {
    if (!hasMounted || isMobile) return "100%";
    return sidebarOpen
      ? `calc(100% - ${SIDEBAR_WIDTH}px)`
      : `calc(100% - ${COLLAPSED_WIDTH}px)`;
  };

  // Show loading state or mobile-first layout during hydration
  if (!hasMounted) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
          flexDirection: "row",
        }}
      >
        <Stack sx={{ flexGrow: 1, width: "100%" }}>
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

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "row",
      }}
    >
      {/* Desktop Sidebar */}
      {!isMobile && showSideBar && (
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
            zIndex: 1500,
          },
          "& .MuiBackdrop-root": {
            zIndex: 1499,
          },
        }}
      >
        <AppDashboardSidebar
          {...sidebarProps}
          open={sidebarOpen}
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

      {/* Menu Toggle Button (Only for Desktop) */}
      {!isMobile && showSideBar && (
        <Box sx={{ display: { xs: "none", md: !showSideBar ? "none" : "block" } }}>
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