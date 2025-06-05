import { Box, Stack } from "@mui/material";
import {
  AppDashboardHeader,
  AppDashboardHeaderProps,
  AppDashboardSidebar,
  AppDashboardSidebarProps,
  SIDEBAR_WIDTH,
} from "./ui/blocks";
import { PropsWithChildren, useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Handler to toggle sidebar state
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Stack
    sx={{
      width: "100vw",
      height: "100vh",
    }}
    direction={"row"}
    >
      {/* Sidebar */}
      <AppDashboardSidebar {...sidebarProps} open={sidebarOpen} />
      <MenuButton onClick={handleSidebarToggle} isMenuOpen={sidebarOpen} />

      {/* Main Content Area */}
      <Stack
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
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
            height: "100%",
            background: "#F9F9F9",
          }}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  );
}