import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

interface AppStepperControllerProps {
  activeTab: number;
  handleTabChange?: (event: React.SyntheticEvent, newValue: number) => void;
  completedSteps: number[];
  tabTitles: {
    id: number;
    label: string;
  }[];
}

export const AppStepperController = ({
  activeTab,
  handleTabChange,
  completedSteps,
  tabTitles,
}: AppStepperControllerProps) => {
  const handleStepClick = (index: number) => {
    if (handleTabChange) {
      handleTabChange({} as React.SyntheticEvent, index);
    }
  };

  return (
    <Box sx={{ width: "100%", paddingX: 2, marginY: 3 }}>
      <Stepper
        activeStep={activeTab}
        alternativeLabel
        sx={{
          width: "100%",
          "& .MuiStepConnector-line": {
            height: 2,
            backgroundColor: "#E0E0E0",
          },
          '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
            backgroundColor: '#E0E0E0'
          },
          '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
            backgroundColor: '#F98D31'
          },
          "& .MuiStep-root": {
            padding: 0,
            cursor: handleTabChange ? "pointer" : "default",
          },
          "& .MuiStepLabel-label": {
            fontSize: "13px",
            color: "#757575",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginTop: 0.5,
            '&.Mui-active': {
              color: '#E0E0E0'
            },
            "&.Mui-completed": {
              color: "#F98D31",
            },
          },
        }}
      >
        {tabTitles.map((item, index) => (
          <Step
            key={item.id}
            completed={completedSteps.includes(index)}
            onClick={() => handleStepClick(index)}
          >
            <StepLabel
              StepIconComponent={({ active, completed }) => (
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: completed ? '#F98D31' : '#E0E0E0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: (completed || active) ? '#FFFFFF' : '#757575',
                    fontWeight: 500
                  }}
                >
                  {index + 1}
                </Box>
              )}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
