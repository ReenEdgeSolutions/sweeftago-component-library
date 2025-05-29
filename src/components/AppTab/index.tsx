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
            label={tab.label}
            sx={{ minWidth: 'auto' }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}