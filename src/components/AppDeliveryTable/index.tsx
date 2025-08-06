import { Box,  Paper, useMediaQuery, useTheme } from "@mui/material";
import { AppDeliveryPanel, AppDeliveryPanelProps } from "../AppDeliveryPanel";
import { CustomPagination, CustomPaginationProps } from "../CustomPagination";
import { EmptyAddDeliveryState, EmptyAddDeliveryStateProps } from "../EmptyAddDeliveryState";
import { AppTab } from "../AppTab";
import { MobilePaginationDrawer } from "../MobilePaginationDrawal";

// Base props that are always required
interface BaseAppDeliveryTableProps {
  children: React.ReactNode;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  TabData: { label: string; count: number }[];
  currentTab: number;
  isProfileComplete?: boolean;
  showTabCount?: boolean;
}

// Props when showAppDeliveryPanel is true (default)
interface AppDeliveryTablePropsWithPanel extends BaseAppDeliveryTableProps {
  showAppDeliveryPanel?: true;
  appDeliveryPanel: AppDeliveryPanelProps;
  paginationProps?: CustomPaginationProps;
  emptyAddDeliveryStateProps?: EmptyAddDeliveryStateProps;
}

// Props when showAppDeliveryPanel is explicitly false
interface AppDeliveryTablePropsWithoutPanel extends BaseAppDeliveryTableProps {
  showAppDeliveryPanel: false;
  appDeliveryPanel?: never;
  paginationProps?: CustomPaginationProps;
  emptyAddDeliveryStateProps?: EmptyAddDeliveryStateProps;
}

// Union type
type AppDeliveryTableProps = AppDeliveryTablePropsWithPanel | AppDeliveryTablePropsWithoutPanel;

export const AppDeliveryTable = (props: AppDeliveryTableProps) => {
  const {
    children,
    handleTabChange,
    TabData,
    currentTab,
    isProfileComplete,
    showAppDeliveryPanel = true,
    paginationProps,
    emptyAddDeliveryStateProps,
    showTabCount = false
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Type guard to access appDeliveryPanel safely
  const appDeliveryPanel = 'appDeliveryPanel' in props ? props.appDeliveryPanel : undefined;

  return (
    <Box width="100%">
      {showAppDeliveryPanel && appDeliveryPanel && (
        <AppDeliveryPanel
          {...appDeliveryPanel}
        />
      )}

      {/* Tabs */}
      <Paper elevation={0} sx={{ mb: "15px", mt:"24px"}} >
        <AppTab
          currentTab={currentTab}
          handleTabChange={handleTabChange}
          TabData={TabData}
          showTabCount={showTabCount}
        />
      </Paper>

      {!isProfileComplete && emptyAddDeliveryStateProps && (
        <EmptyAddDeliveryState {...emptyAddDeliveryStateProps}/>
      )}

      {isProfileComplete && (
        <Box>
          {/* Delivery Items */}
          {children}

          {/* Pagination */}
          {isMobile  ? (
            <MobilePaginationDrawer>
              {paginationProps &&(
                <CustomPagination {...paginationProps} />
              )}
            </MobilePaginationDrawer>
          ): (
            paginationProps && (
              <CustomPagination {...paginationProps}/>
            )
          )}
        </Box>
      )}
    </Box>
  )
}