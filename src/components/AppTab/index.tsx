import { Paper, Tab, Tabs } from "@mui/material"

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
  return (
    <Paper elevation={0} sx={{ mb: 3, mt:"24px"}} >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="delivery tabs"
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            display: 'none' // This removes the underline indicator
          }
        }}
        sx={{
          bgcolor: '#F0F0F0',
          borderRadius: "10px",
          '& .MuiTab-root': {
            m: 0.5,
            borderRadius: "10px",
            minHeight: '30px',
            color: '#000000',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth transition with professional easing
            transform: 'scale(1)',
            '&:hover': {
              bgcolor: 'rgba(25, 46, 56, 0.08)', // Subtle hover effect
              transform: 'scale(1.02)', // Slight scale on hover
              color: '#192E38'
            },
            '&:active': {
              transform: 'scale(0.98)' // Subtle press feedback
            }
          },
          '& .MuiTab-root.Mui-selected': {
            bgcolor: '#192E38',
            color: '#ffffff',
            textDecoration: 'none',
            transform: 'scale(1)',
            boxShadow: '0 2px 8px rgba(25, 46, 56, 0.2)', // Subtle elevation for active tab
            '&:hover': {
              textDecoration: 'none',
              bgcolor: '#1a3440', // Slightly lighter on hover when selected
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
              fontWeight: currentTab === index ? 600 : 400, // Subtle font weight change
              transition: 'font-weight 0.2s ease-in-out' // Smooth font weight transition
            }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}