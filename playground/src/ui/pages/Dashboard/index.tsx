"use client"
import { AppDashboardLayout, AppTitleAndLabel } from "@component-library"
import homeIcon from "./ui/assets/icons/home.svg"
import earnings from "./ui/assets/icons/money.svg";
import route from "./ui/assets/icons/location.svg"
import support from "./ui/assets/icons/help-center.png"
import profileImg from "./ui/assets/icons/profile.png"
import { Box, useMediaQuery, useTheme } from "@mui/material";

const sidebarLinks = [
  {
    sideIcon: homeIcon,
    sideLink: "Home",
    link: "/home",
  },
  {
    sideIcon: earnings,
    sideLink: "Earnings",
    link: "/earnings",
  },
  {
    sideIcon: route,
    sideLink: "Route & Pricing Model",
    link: "/route",
  },
  {
    sideIcon: support,
    sideLink: "Support & Help",
    link: "/support",
  },
];


export const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleProfileClick = () => {
    console.log("profile clicked")
  }

  const profileData = {
    firstName: "Shola",
    lastName: "Gibson",
    userMail: "sholagibson@gmailcom",
    userImg: profileImg,
    profileClick: handleProfileClick
  }


  return(
    <AppDashboardLayout
      headerProps={{
        profileProps: profileData,
        onChatToggle: () => console.log("Chat toggled"),
      }}
      sidebarProps={{
        links: sidebarLinks,
        handleLogout: () => console.log("logout"),
        handleDeactivateAccount: () => console.log("deactivate account"),
        showSideLinks: isMobile ? true : false,
        // ratingItems: ratingItems,
        // showProfileRating: true,
        // ratePercent: calculateRatePercent(),
      }}
    >
      <Box>
        <AppTitleAndLabel
          title="Hello Cakes & Creams!"
          label="Here’s a quick look at your activities this week."
        />

        {/* <Stack spacing={"32px"}>
          <AppDeliveryPanel
            panelTitle="My Delivery Request"
            handleExport={() => console.log("export")}
            handleViewSavedDraft={() => console.log("view saved draft")}
            requestsBtnText="New Delivery Request"
            handleRequestsBtnClick={() => console.log("requests clicked")}
            showSavedDraft={true}
          />

          <LogisticsFinancials/>

          <VendorDashboardInfo isProfileComplete={true}/>
        </Stack> */}
        {/* <TransactionHistory/> */}
        {/* <DashboardHelpCenter/> */}
        {/* <UserProfilePage
          setIsGeneralInfoCompleted={setIsGeneralInfoCompleted}
          setIsPickUpDetailsCompleted={setIsPickUpDetailsCompleted}
        /> */}
      </Box>
    </AppDashboardLayout>
  )
}