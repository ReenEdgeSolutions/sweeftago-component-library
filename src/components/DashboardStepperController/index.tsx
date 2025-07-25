import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  Typography,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface DashboardStepperControllerProps {
  activeTab: number;
  handleTabChange?: (event: React.SyntheticEvent, newValue: number) => void;
  completedSteps: number[];
  tabTitles: {
    id: number;
    label: string;
  }[];
}

// Styled vertical connector for desktop
const VerticalConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    // marginLeft: 11,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#E0E0E0',
    minHeight: 32,
    borderLeftWidth: 2,
  },
}));

// Styled horizontal connector for mobile
const HorizontalConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.horizontal}`]: {
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)',
    width: 'calc(100% - 24px)',
    margin: '0 auto',
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#E0E0E0',
    borderTopWidth: 2,
    borderLeftWidth: 0,
  },
}));

// Custom step icon
const CustomStepIcon = ({
  active = false,
  completed = false,
  icon,
}: {
  active?: boolean;
  completed?: boolean;
  icon: React.ReactNode;
}) => (
  <Box
    sx={{
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: active || completed ? '#F98D31' : '#E0E0E0',
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      color: active || completed ? '#fff' : '#757575',
      fontWeight: 500,
      fontSize: 12,
    }}
  >
    {icon}
  </Box>
);

export const DashboardStepperController = ({
  activeTab,
  handleTabChange,
  completedSteps,
  tabTitles,
}: DashboardStepperControllerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleStepClick = (index: number) => {
    if (handleTabChange) {
      handleTabChange({} as React.SyntheticEvent, index);
    }
  };

  return (
    <Stepper
      activeStep={activeTab}
      orientation={isMobile ? 'horizontal' : 'vertical'}
      connector={isMobile ? <HorizontalConnector /> : <VerticalConnector />}
      sx={{
        paddingY: 1,
        ...(isMobile && {
          width: '100%',
          padding: 0,
          margin: 0,
        })
      }}
    >
      {tabTitles.map((item, index) => {
        const isActive = activeTab === index;
        const isCompleted = completedSteps.includes(index);
        const labelText = item.label;

        return (
          <Step
            key={item.id}
            onClick={() => handleStepClick(index)}
            sx={{
              cursor: handleTabChange ? 'pointer' : 'default',
              ...(isMobile && {
                flex: 1,
                padding: 0,
                '& .MuiStepLabel-root': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 0,
                },
                '& .MuiStepLabel-iconContainer': {
                  paddingRight: 0,
                },
              })
            }}
            completed={isCompleted}
          >
            <StepLabel
              StepIconComponent={CustomStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: '12px',
                  fontWeight: 500,
                  color: isActive || isCompleted ? '#F98D31' : '#757575',
                  marginLeft: isMobile ? 0 : 1,
                  marginTop: isMobile ? 1 : 0,
                  textAlign: isMobile ? 'center' : 'left',
                  paddingRight: isMobile ? 0 : undefined,
                  whiteSpace: isMobile ? 'nowrap' : 'normal',
                },
              }}
            >
              <Typography component="span">{labelText}</Typography>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};