import {
  Stack,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: {xs:'100%', md: '750px'},
        maxWidth: "800px",
        minWidth: "300px",
        margin: '0 auto',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        p: {xs: "10px", md: "20px"},
        gap: "32px",
        backgroundColor: '#f9f9f9',
      }}
    >
      {showTitleAndDesc && (
        <AppTitleAndDesc
          title="Almost There — Let's Get You Set Up!"
          description="Just a few quick steps to help you start requesting deliveries on WhatsApp"
        />
      )}

      {/* Mobile: Stepper at top */}
      {isMobile && (
        <Box sx={{
          width: '100%',
          margin: 0,
          padding: 0,
        }}>
          <DashboardStepperController
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            completedSteps={completedSteps}
            tabTitles={tabTitles}
          />
        </Box>
      )}

      <Grid container spacing={2}>
        {/* Desktop: Left-side Stepper */}
        {!isMobile && (
          <Grid size={{xs: 12, md: 4}}>
            <Box sx={{ paddingLeft: 0 }}>
              <DashboardStepperController
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                completedSteps={completedSteps}
                tabTitles={tabTitles}
              />
            </Box>
          </Grid>
        )}

        {/* Content */}
        <Grid size={{xs: 12, md: 7}}>
          <Stack spacing="24px">
            <Typography
              sx={{
                fontSize:{xs: pxToRem(12), sm: pxToRem(16)},
                fontWeight: {xs: 400, sm: 500},
                color: '#252423',
                lineHeight: '140%',
                flex: 1
              }}
            >
              {tabTitles[activeTab]?.label ?? ''}
            </Typography>

            {children}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};