"use client";
import { Grid, Box, useMediaQuery } from "@mui/material";
import generalInfo from "./ui/assets/icons/general-info.svg"
import lock from "./ui/assets/icons/change-password.svg"
import pickupDetails from "./ui/assets/icons/pickup.svg"
import { useState } from "react";
import { AppTabPanel, AppVerticalTab, AppBackAndChildren } from "@component-library";
import { GeneralInfo, PickDetails, UserPasswordComponent } from "./ui/components";

interface UserProfilePageProps {
  setIsGeneralInfoCompleted: (completed: boolean) => void;
  setIsPickUpDetailsCompleted: (completed: boolean) => void;
}

export function UserProfilePage({
  setIsGeneralInfoCompleted,
  setIsPickUpDetailsCompleted
}: UserProfilePageProps) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isVerified, setIsVerified] = useState(false);
  const [value, setValue] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    console.log("e", event)
    setValue(newValue);
    if (isMobile) {
      setShowContent(true);
    }
  };

  const handleBackClick = () => {
    setShowContent(false);
  };

  const verticalTab = [
    {
      icon: generalInfo.src,
      tabTitle: 'General Information',
      active: true,
      component:
      <GeneralInfo
        infoIsCompleted={() => {
          setIsGeneralInfoCompleted(true);
          setIsVerified(true);
          setValue(1);
        }}
        isVerified={isVerified}
        setTabValue={setValue}
      />
    },
    {
      icon: generalInfo.src,
      tabTitle: 'General Information',
      active: true,
      component:
      <GeneralInfo
        infoIsCompleted={() => {
          setIsGeneralInfoCompleted(true);
          setIsVerified(true);
          setValue(1);
        }}
        isVerified={isVerified}
        setTabValue={setValue}
      />
    },
    {
      icon: pickupDetails.src,
      tabTitle: 'Pickup Details',
      active: false,
      component:
      <PickDetails
        PickDetailsIsCompleted={() => {
          setIsPickUpDetailsCompleted(true);
          setValue(2);
        }}
        setTabValue={setValue}
      />
    },
    {
      icon: lock.src,
      tabTitle: 'Change Password',
      active: false,
      component: <UserPasswordComponent />
    }
  ]

  if (isMobile) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Mobile sliding container */}
        <Box
          sx={{
            display: 'flex',
            width: '200%',
            height: '100%',
            transform: showContent ? 'translateX(-50%)' : 'translateX(0)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {/* Left panel - Profile completion and tabs */}
          <Box sx={{ width: '50%', height: '100%' }}>
            <Grid container sx={{ height: '100%', m: 0, p: 2 }}>
              <Grid size={{xs: 12}}>
                <AppVerticalTab
                  tabData={verticalTab}
                  value={value}
                  handleChange={handleChangeTab}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Right panel - Tab content */}
          <Box sx={{ width: '50%', height: '100%' }}>
            <Grid container sx={{ height: '100%', m: 0, p: 2 }}>
              <Grid size={{xs: 12}}>
                <AppBackAndChildren
                  title=""
                  desc=""
                  removeIcon={true}
                  onBackClick={handleBackClick}
                >
                  {verticalTab.map((tab, index) => (
                    <AppTabPanel
                      key={index}
                      index={index}
                      value={value}
                    >
                      {tab.component}
                    </AppTabPanel>
                  ))}
                </AppBackAndChildren>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }

  // Desktop version (your original code)
  return (
    <Grid container spacing="32px" m="16px auto auto 32px">
      <Grid size={{xs: 3}}>
        <AppVerticalTab
          tabData={verticalTab}
          value={value}
          handleChange={handleChangeTab}
        />
      </Grid>
      <Grid size={{xs: 6}}>
        <AppBackAndChildren
          title=""
          desc=""
          removeIcon={false}
        >
          {verticalTab.map((tab, index) => (
            <AppTabPanel
              key={index}
              index={index}
              value={value}
            >
              {tab.component}
            </AppTabPanel>
          ))}
        </AppBackAndChildren>
      </Grid>
    </Grid>
  )
}