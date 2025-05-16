import { Box, Stepper, Step, StepLabel } from "@mui/material";

interface AppStepperProps {
  activeStep: number;
  steps: string[];
  onStepClick?: (step: number) => void;
}

/**
 * A simple MUI Stepper component that shows the progress through a multi-step process.
 *
 * @param activeStep - The current active step (0-based index)
 * @param steps - Array of step labels to display
 * @param onStepClick - Optional callback when a step is clicked
 */
export const AppStepper = ({
  activeStep,
  steps,
  onStepClick
}: AppStepperProps) => {
  const handleStepClick = (index: number) => {
    if (onStepClick) {
      onStepClick(index);
    }
  };

  return (
    <Box sx={{ width: '100%', my: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            completed={index < activeStep}
            onClick={() => handleStepClick(index)}
            sx={{ cursor: onStepClick ? 'pointer' : 'default' }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};