import { Paper, Stack, Typography } from "@mui/material";
import React, { memo, PropsWithChildren, useMemo } from "react";
import { AppTitleAndDesc } from "../AppTitleAndDesc";
import { AppStepperController } from "../AppStepperController";
import { RowStack } from "../RowStack";
import { pxToRem } from "../../common";
import { AppButton } from "../AppButton";
import { AppAuthLayout } from "../AppAuthLayout";

interface TabTitle {
  id: number;
  label: string;
}

interface AppMultiStepTabProps extends PropsWithChildren {
  activeTab: number; // 0-based for compatibility
  completedSteps: number[]; // 0-based array
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  handleSkip: () => void;
  tabTitles: string[] | TabTitle[]; // Support both formats
  handleDesktopHelpClick: () => void;
  handleMobileHelpClick: () => void;
  title?: string;
  description?: string;
  showSkip?: boolean;
}

const defaultProps = {
  title: "Almost There — Let's Get You Set Up!",
  description: "Just a few quick steps to help you start requesting deliveries on WhatsApp",
  showSkip: true,
} as const;

export const AppMultiStepTab = memo(
  ({
    children,
    activeTab,
    completedSteps,
    handleTabChange,
    handleSkip,
    tabTitles,
    handleDesktopHelpClick,
    handleMobileHelpClick,
    title = defaultProps.title,
    description = defaultProps.description,
    showSkip = defaultProps.showSkip,
  }: AppMultiStepTabProps) => {
    const normalizedTabTitles = useMemo(() => {
      if (typeof tabTitles[0] === "string") {
        return (tabTitles as string[]).map((label, index) => ({
          id: index,
          label,
        }));
      }
      return tabTitles as TabTitle[];
    }, [tabTitles]);

    // Memoize current tab label to avoid recalculation
    const currentTabLabel = useMemo(
      () => normalizedTabTitles[activeTab]?.label ?? "",
      [normalizedTabTitles, activeTab],
    );

    // Memoize header props to prevent unnecessary re-renders
    const headerProps = useMemo(
      () => ({
        handleDesktopHelpClick,
        handleMobileHelpClick,
      }),
      [handleDesktopHelpClick, handleMobileHelpClick],
    );

    return (
      <AppAuthLayout HeaderProps={headerProps}>
        <Paper
          elevation={1}
          sx={{
            padding: { xs: "20px", md: "32px" },
            width: "100%",
            margin: "0 auto",
            borderRadius: "10px",
            border: { xs: "none", md: "1px solid #D5D5D5" },
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            backgroundColor: "transparent",
            boxShadow: { xs: "none", md: "0px 4px 16px rgba(0, 0, 0, 0.1)" },
          }}
        >
          <AppTitleAndDesc title={title} description={description} />

          <Stack spacing="40px">
            <AppStepperController
              activeTab={activeTab}
              handleTabChange={handleTabChange}
              completedSteps={completedSteps}
              tabTitles={normalizedTabTitles}
            />

            <Stack spacing="24px">
              <RowStack justifyContent="space-between">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    color: "#252423",
                    lineHeight: "140%",
                    flexGrow: 1,
                  }}
                >
                  {currentTabLabel}
                </Typography>

                {showSkip && (
                  <AppButton
                    disableArrow
                    variant="text"
                    onClick={handleSkip}
                    sx={{
                      fontSize: pxToRem(14),
                      fontWeight: 500,
                      lineHeight: "140%",
                      textDecoration: "underline",
                      padding: 0,
                      color: "#F98D31",
                      backgroundColor: "transparent",
                      minWidth: "auto",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Skip for now
                  </AppButton>
                )}
              </RowStack>

              {children}
            </Stack>
          </Stack>
        </Paper>
      </AppAuthLayout>
    );
  },
);
