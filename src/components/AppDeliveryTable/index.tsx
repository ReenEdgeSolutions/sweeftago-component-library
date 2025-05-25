import { Box,  Paper, Tab, Tabs} from "@mui/material";
import { AppDeliveryPanel, AppDeliveryPanelProps } from "../AppDeliveryPanel";
import { CustomPagination, CustomPaginationProps } from "../CustomPagination";
import { EmptyAddDeliveryState, EmptyAddDeliveryStateProps } from "../EmptyAddDeliveryState";

// Base props that are always required
interface BaseAppDeliveryTableProps {
  children: React.ReactNode;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  TabData: { label: string; count: number }[];
  currentTab: number;
  isProfileComplete?: boolean;
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
    emptyAddDeliveryStateProps
  } = props;

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
      <Paper elevation={0} sx={{ mb: 3, mt:"24px"}} >
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="delivery tabs"
          variant="fullWidth"
          sx={{
            bgcolor: '#F0F0F0',
            borderRadius: "10px",
            '& .MuiTab-root': {
              m: 0.5,
              borderRadius: "10px",
              minHeight: '40px',
              color: '#000000' // default color
            },
            '& .MuiTab-root.Mui-selected': {
              bgcolor: '#192E38',
              color: '#ffffff', // active tab text color
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              }
            }
          }}
        >
          {TabData.map((tab, index) => (
            <Tab
              key={index}
              label={`${tab.label} (${isProfileComplete ? tab.count : 0})`}
              sx={{ minWidth: 'auto' }}
            />
          ))}
        </Tabs>
      </Paper>

      {!isProfileComplete && emptyAddDeliveryStateProps && (
        <EmptyAddDeliveryState {...emptyAddDeliveryStateProps}/>
      )}

      {isProfileComplete && (
        <Box>
          {/* Delivery Items */}
          {children}

          {/* Pagination */}
          {paginationProps && (
            <CustomPagination {...paginationProps}/>
          )}
        </Box>
      )}
    </Box>
  )
}