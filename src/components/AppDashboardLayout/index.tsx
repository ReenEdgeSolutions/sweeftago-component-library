import { Box, Stack } from "@mui/material";
import {
  AppDashboardHeader,
  AppDashboardHeaderProps,
  AppDashboardSidebar,
  AppDashboardSidebarProps,
  SIDEBAR_WIDTH,
  COLLAPSED_WIDTH,
} from "./ui/blocks";
import { PropsWithChildren, useState } from "react";
import { MenuButton } from "./ui/blocks/AppDashboardSidebar/ui/components";
import { RowStack } from "../RowStack";

export type AppDashboardLayoutProps = PropsWithChildren & {
  headerProps: AppDashboardHeaderProps;
  sidebarProps: Omit<AppDashboardSidebarProps, "open">;
};

export function AppDashboardLayout({
  children,
  headerProps,
  sidebarProps,
}: AppDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Handler to toggle sidebar state
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <RowStack
      sx={{
        width: "100vw",
        height: "100vh",
        background: " #f9f9f9",
      }}
    >
      {/* Sidebar */}
      <AppDashboardSidebar {...sidebarProps} open={sidebarOpen} />
      <MenuButton onClick={handleSidebarToggle} isMenuOpen={sidebarOpen} />

      {/* Main Content Area */}
      <Stack
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sidebarOpen ? SIDEBAR_WIDTH : COLLAPSED_WIDTH}px)`,
          transition: (theme) => theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <AppDashboardHeader {...headerProps} />

        <Box
          sx={{
            padding: {
              xs: "20px",
              sm: "25px",
              md: "30px",
            },
            overflowY: "auto",
            height: 'calc(100vh - 90px)',
            background: "#F9F9F9",
          }}
        >
          {children}
        </Box>
      </Stack>
    </RowStack>
  );
}