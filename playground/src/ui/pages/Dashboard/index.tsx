"use client"
import { AppDashboardLayout, AppDeliveryCards, AppDeliveryPanel, AppTitleAndLabel } from "@component-library"
import homeIcon from "./ui/assets/icons/home.svg"
import earnings from "./ui/assets/icons/money.svg";
import route from "./ui/assets/icons/location.svg"
import support from "./ui/assets/icons/help-center.png"
import profileImg from "./ui/assets/icons/profile.png"
import { Box, Stack } from "@mui/material";
import { LogisticsFinancials } from "../LogisticsFinancials";

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

const deliveryData = [
  {
    id: 1,
    background: "#BFFFE2",
    cardLabel: "Total Deliveries",
    cardValue: "20",
  },
  {
    id: 2,
    background: "#B2FAFF",
    cardLabel: "Average Fulfillment Time",
    cardValue: "1-2hrs",
  },
  {
    id: 3,
    background: "#CAFD9E",
    cardLabel: "Total Spent",
    cardValue: "₦5,000",
  },
  {
    id: 4,
    background: "#F2FF9A",
    cardLabel: "Delivery Success Rate",
    cardValue: "100%",
  },
]


export const DashboardLayout = () => {
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
      }}
    >
      <Box>
        <Stack spacing={"24px"}>
          <AppTitleAndLabel
            title="Hello Cakes & Creams!"
            label="Here’s a quick look at your activities this week."
          />

          <AppDeliveryCards deliverydata={deliveryData}/>
        </Stack>

        <Stack mt="50px" spacing={"32px"}>
          <AppDeliveryPanel
            panelTitle="My Delivery Request"
            handleExport={() => console.log("export")}
            handleViewSavedDraft={() => console.log("view saved draft")}
            requestsBtnText="New Delivery Request"
            handleRequestsBtnClick={() => console.log("requests clicked")}
            showSavedDraft={true}
          />

          <LogisticsFinancials/>
        </Stack>
      </Box>
    </AppDashboardLayout>
  )
}