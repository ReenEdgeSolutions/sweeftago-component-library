import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  Typography,
  Box,
  styled,
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

// Styled vertical connector
const OrangeConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 11,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#E0E0E0',
    minHeight: 32,
    borderLeftWidth: 2,
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
      justifyContent: 'center',
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
  const handleStepClick = (index: number) => {
    if (handleTabChange) {
      handleTabChange({} as React.SyntheticEvent, index);
    }
  };

  return (
    <Stepper
      activeStep={activeTab}
      orientation="vertical"
      connector={<OrangeConnector />}
      sx={{ paddingY: 1 }}
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
                  marginLeft: 1,
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
