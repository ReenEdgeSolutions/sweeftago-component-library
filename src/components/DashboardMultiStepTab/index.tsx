import {
  Paper,
  Stack,
  Typography,
  Box,
  Grid
} from '@mui/material';
import { AppTitleAndDesc } from '../AppTitleAndDesc';
import { pxToRem } from '../../common/utils';
import { DashboardStepperController } from '../DashboardStepperController';

interface DashboardMultiStepTabProps {
  children: React.ReactNode;
  activeTab: number;
  completedSteps: number[];
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabTitles: {
    id: number;
    label: string;
  }[];
  showTitleAndDesc?: boolean;
}

export const DashboardMultiStepTab = ({
  children,
  activeTab,
  completedSteps,
  handleTabChange,
  tabTitles,
  showTitleAndDesc = true
}: DashboardMultiStepTabProps) => {

  return (
    <Paper
      sx={{
        padding: { xs: '20px', md: '32px' },
        width: '100%',
        maxWidth: "750px",
        margin: '0 auto',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: "32px",
        backgroundColor: 'white',
      }}
    >
      {showTitleAndDesc && (
        <AppTitleAndDesc
          title="Almost There — Let's Get You Set Up!"
          description="Just a few quick steps to help you start requesting deliveries on WhatsApp"
        />
      )}

      <Grid container spacing={2}>
        {/* Left-side Stepper */}
        <Grid size={{xs: 12, md: 5}}>
          <Box sx={{ paddingLeft: { md: 2 } }}>
            <DashboardStepperController
              activeTab={activeTab}
              handleTabChange={handleTabChange}
              completedSteps={completedSteps}
              tabTitles={tabTitles}
            />
          </Box>
        </Grid>
        
        {/* Right-side Content */}
        <Grid size={{xs: 12, md: 7}}>
          <Stack spacing="24px">
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 500,
                color: '#252423',
                lineHeight: '140%',
                flexGrow: 1
              }}
            >
              {tabTitles[activeTab]?.label ?? ''}
            </Typography>

            {children}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};