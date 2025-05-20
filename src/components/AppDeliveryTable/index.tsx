import { Box,  FormControl, MenuItem, Pagination, Paper, Select, SelectChangeEvent, Stack, Tab, Tabs, Typography } from "@mui/material";
import { AppDeliveryPanel, AppDeliveryPanelProps } from "../AppDeliveryPanel";
import { pxToRem } from "../../common/utils";

interface AppDeliveryTableProps {
  children: React.ReactNode;
  appDeliveryPanel : AppDeliveryPanelProps;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  TabData: { label: string; count: number }[];
  itemsPerPage: number;
  handleItemsPerPageChange: (event: SelectChangeEvent<number>, child: React.ReactNode) => void;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalItems: number;
  totalPages: number;
  currentTab: number;
}

export const AppDeliveryTable = ({
  appDeliveryPanel,
  children,
  handleTabChange,
  TabData,
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  handlePageChange,
  totalItems,
  totalPages,
  currentTab
}: AppDeliveryTableProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <Box width="100%">
      <AppDeliveryPanel
        {...appDeliveryPanel}
      />

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
              label={`${tab.label} (${tab.count})`}
              sx={{ minWidth: 'auto' }}
            />
          ))}
        </Tabs>
      </Paper>

      {/* Delivery Items */}
          {children}

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 400,
              color: '#615D5D',
              lineHeight: '140%',
            }}
          >
            Items per page
          </Typography>

          <FormControl size="small">
            <Select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              sx={{ minWidth: 60 }}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 400,
              color: '#615D5D',
              lineHeight: '140%',
            }}
          >
            {startIndex + 1}-{endIndex} of {totalItems} items
          </Typography>
        </Stack>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              '&.Mui-selected': {
                backgroundColor: '#F98D31',
                '&:hover': {
                  backgroundColor: '#ea580c',
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}