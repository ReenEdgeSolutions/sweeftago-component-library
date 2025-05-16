"use client"
import { useState } from "react"
import { Box, Tab, Tabs} from "@mui/material"
import { TabPanel } from "./ui/components"
import { EmptyAddDeliveryState } from "../EmptyAddDeliveryState"

interface AppTabProps {
  handleCreateNewDelivery: () => void;
  isSetUpComplete: boolean;
}

export const AppTab = ({
  handleCreateNewDelivery,
  isSetUpComplete
}: AppTabProps) => {
  const [value, setValue] = useState(0);

  interface HandleChangeEvent {
    target: EventTarget;
  }

  const handleChange = (_: HandleChangeEvent, newValue: number): void => {
    setValue(newValue);
  };

  return(
    <Box sx={{ width: '100%' }}>
      <Box>
      <Tabs
        value={value}
        onChange={handleChange}
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
            color: '#ffffff' // active tab text color
          }
        }}
      >
          <Tab label="All (0)" disabled />
          <Tab label="Ongoing (0)" disabled />
          <Tab label="Scheduled (0)" disabled />
          <Tab label="Completed (0)" disabled />
        </Tabs>
      </Box>

      <TabPanel value={0} index={0}>
        <EmptyAddDeliveryState
          handleCreateNewDelivery={handleCreateNewDelivery}
          isSetUpCompletted={isSetUpComplete}
        />
      </TabPanel>
      <TabPanel value={0} index={1}></TabPanel>
      <TabPanel value={0} index={2}></TabPanel>
      <TabPanel value={0} index={3}></TabPanel>
    </Box>
  )
}