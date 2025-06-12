import { Paper, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material"

interface AppTabProps {
  currentTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  TabData: { label: string }[];
}

export const AppTab = ({
  currentTab,
  handleTabChange,
  TabData
}: AppTabProps) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm')); // Only xs screens

  return (
    <Paper elevation={0} sx={{ mb: 3, mt:"24px"}} >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="delivery tabs"
        variant={isXsScreen ? "scrollable" : "fullWidth"}
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            display: 'none' // This removes the underline indicator
          }
        }}
        sx={{
          bgcolor: '#F0F0F0',
          borderRadius: "10px",
          width: '100%', // Ensure full width
          // Hide scroll buttons styling
          '& .MuiTabs-scrollButtons': {
            display: 'none' // Hide the scroll buttons for cleaner look
          },
          // Custom scrollbar styling for better UX
          '& .MuiTabs-scroller': {
            width: '100%', // Make scroller full width
            '&::-webkit-scrollbar': {
              display: 'none' // Hide scrollbar on webkit browsers
            },
            scrollbarWidth: 'none', // Hide scrollbar on Firefox
            msOverflowStyle: 'none' // Hide scrollbar on IE/Edge
          },
          // Ensure flexbox container takes full width
          '& .MuiTabs-flexContainer': {
            width: isXsScreen ? 'max-content' : '100%', // Allow overflow on xs screens only
            minWidth: '100%' // Minimum width should be 100%
          },
          '& .MuiTab-root': {
            m: 0.5,
            borderRadius: "10px",
            minHeight: '30px',
            color: '#000000',
            // Responsive tab sizing
            minWidth: isXsScreen ? '120px' : 'auto',
            flex: isXsScreen ? '0 0 auto' : '1', // Don't grow on xs screens, grow on sm+ screens
            maxWidth: isXsScreen ? 'none' : '264px', // Remove max width restriction on xs screens
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1)',
            '&:hover': {
              bgcolor: 'rgba(25, 46, 56, 0.08)',
              transform: 'scale(1.02)',
              color: '#192E38'
            },
            '&:active': {
              transform: 'scale(0.98)'
            }
          },
          '& .MuiTab-root.Mui-selected': {
            bgcolor: '#192E38',
            color: '#ffffff',
            textDecoration: 'none',
            transform: 'scale(1)',
            boxShadow: '0 2px 8px rgba(25, 46, 56, 0.2)',
            '&:hover': {
              textDecoration: 'none',
              bgcolor: '#1a3440',
              transform: 'scale(1)'
            }
          }
        }}
      >
        {TabData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              minWidth: 'auto',
              fontWeight: currentTab === index ? 600 : 400,
              transition: 'font-weight 0.2s ease-in-out',
              // Ensure text doesn't wrap on small screens
              whiteSpace: 'nowrap'
            }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}