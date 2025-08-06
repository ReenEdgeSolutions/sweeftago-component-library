import { Paper, Tab, Tabs, Typography, useMediaQuery, useTheme, Box } from "@mui/material"

interface AppTabProps {
  currentTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  TabData: { label: string, count: number }[];
  showTabCount?: boolean;
}

export const AppTab = ({
  currentTab,
  handleTabChange,
  TabData,
  showTabCount = false
}: AppTabProps) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            display: 'none'
          }
        }}
        sx={{
          bgcolor: '#F0F0F0',
          borderRadius: "10px",
          width: '100%',
          '& .MuiTabs-scrollButtons': {
            display: 'none'
          },
          '& .MuiTabs-scroller': {
            width: '100%',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          },
          '& .MuiTabs-flexContainer': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 0,
          },
          '& .MuiTab-root': {
            m: 0.5,
            borderRadius: "10px",
            minHeight: '30px',
            color: '#000000',
            minWidth: isXsScreen ? '120px' : '0',
            flex: isXsScreen ? '0 0 auto' : '1 1 0',
            maxWidth: 'none',
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
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Typography
                  sx={{
                    fontWeight: currentTab === index ? 600 : 400,
                    transition: 'font-weight 0.2s ease-in-out',
                    whiteSpace: 'nowrap',
                    color: 'inherit',
                  }}
                >
                  {tab.label}
                </Typography>
                {showTabCount && (
                  <Typography
                    sx={{
                      fontWeight: currentTab === index ? 600 : 400,
                      transition: 'font-weight 0.2s ease-in-out',
                      whiteSpace: 'nowrap',
                      color: 'inherit',
                    }}
                  >
                    {`(${tab.count})`}
                  </Typography>
                )}
              </Box>
            }
            sx={{
              minWidth: 'auto',
              fontWeight: currentTab === index ? 600 : 400,
              transition: 'font-weight 0.2s ease-in-out',
              whiteSpace: 'nowrap',
              color: currentTab === index ? '#ffffff' : '#797979',
            }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}