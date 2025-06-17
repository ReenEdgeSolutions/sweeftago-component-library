import {
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { AppTitleAndDesc } from '../AppTitleAndDesc';
import { AppStepperController } from '../AppStepperController';
import { RowStack } from '../RowStack';
import { pxToRem } from '../../common/utils';
import { AppButton } from '../AppButton';
import { AppAuthLayout } from '../AppAuthLayout';

interface AppMultiStepTabProps {
  children: React.ReactNode;
  activeTab: number;
  setActiveTab?: (tab: number) => void;
  completedSteps: number[];
  setCompletedSteps?: (steps: number[]) => void;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  handleSkip: () => void;
  tabTitles: {
    id: number;
    label: string;
  }[];
  handleDesktopHelpClick: () => void;
  handleMobileHelpClick: () => void;
}

export const AppMultiStepTab = ({
  children,
  activeTab,
  completedSteps,
  handleTabChange,
  handleSkip,
  tabTitles,
  handleDesktopHelpClick,
  handleMobileHelpClick,
}: AppMultiStepTabProps) => {

  return (
    <AppAuthLayout
      HeaderProps={{
        handleDesktopHelpClick: handleDesktopHelpClick,
        handleMobileHelpClick: handleMobileHelpClick
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: { xs: '20px', md: '32px' },
          width: '100%',
          margin: '0 auto',
          borderRadius: '10px',
          border: {xs: "none", md: "1px solid #D5D5D5"},
          display: 'flex',
          flexDirection: 'column',
          gap: "32px",
          backgroundColor: 'transparent',
          boxShadow: {xs: "none", md: "0px 4px 16px rgba(0, 0, 0, 0.1)"},
        }}
      >
        <AppTitleAndDesc
          title="Almost There — Let's Get You Set Up!"
          description="Just a few quick steps to help you start requesting deliveries on WhatsApp"
        />

        <Stack spacing={"40px"}>
          {/* Tabs */}
          <AppStepperController
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            completedSteps={completedSteps}
            tabTitles={tabTitles}
          />

          {/* Tab Content title and skip */}
          <Stack spacing={"24px"}>
            <RowStack justifyContent={"space-between"}>
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

              <AppButton
                disableArrow
                variant="text"
                onClick={handleSkip}
                sx={{
                  fontSize: pxToRem(14),
                  fontWeight: 500,
                  lineHeight: '140%',
                  textDecoration: 'underline',
                  padding: 0,
                  color: '#F98D31',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                Skip for now
              </AppButton>
            </RowStack>

            {children}
          </Stack>
        </Stack>
      </Paper>
    </AppAuthLayout>
  );
}