import { Box, Stack } from "@mui/material";
import {
  AppDashboardHeader,
  AppDashboardHeaderProps,
  AppDashboardSidebar,
  AppDashboardSidebarProps,
} from "./ui/blocks";
import { PropsWithChildren} from "react";
import { RowStack } from "../RowStack";

export type AppProfileLayoutProps = PropsWithChildren & {
  headerProps: AppDashboardHeaderProps;
  sidebarProps: AppDashboardSidebarProps;
};

export function AppProfileLayout({
  children,
  headerProps,
  sidebarProps,
}: AppProfileLayoutProps) {

  return (
    <RowStack
      sx={{
        width: "100vw",
        height: "100vh",
        background: " #f9f9f9",
      }}
    >
      {/* Sidebar */}
      <AppDashboardSidebar {...sidebarProps}/>

      {/* Main Content Area */}
      <Stack
        sx={{
          flexGrow: 1,
          width: "100%",
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