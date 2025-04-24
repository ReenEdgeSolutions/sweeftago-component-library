"use client";

import {
  // AppAddressLink,
  AppButton,
  AppComponentDashboard,
  AppDropdownField,
  AppFileField,
  AppLabel,
  AppMobileDownloadComponent,
  AppModal,
  AppMultipleSelectField,
  FormikAppTextField,
  pxToRem,
  RowStack,
  simulateApiCall,
  StyledImage,
} from "@component-library";
import homeIcon from "./ui/assets/icons/home.svg";
import truckIcon from "./ui/assets/icons/truck-fast.svg";
// import { toast } from "sonner";
// import userImg from "@/ui/assets/icons/userImg.svg";
import { Grid } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
// import dash1 from "./ui/assets/images/dash1.png";
// import dash2 from "./ui/assets/images/dash2.png";
// import dash3 from "./ui/assets/images/dash3.png";
// import dash4 from "./ui/assets/images/dash4.png";
import flxfleetImg from "./ui/assets/images/flxfleet-van.png";
import { useCallback, useState } from "react";
// import { Marker } from "@react-google-maps/api";
// import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { 
  AppDropCode,
  AppGoogleMap,
  AppGoogleMapsProvider,
  // AppChip, 
  // AppChipAndChildren, 
  // AppSelectedVehicle, 
  AppTabComponent,
  StyledLink, 
  // OrderTrackingCard 
} from "../../../../../src/components";

const links = [
  {
    sideIcon: homeIcon,
    sideLink: "Home",
    link: "/home",
  },
  {
    sideIcon: truckIcon,
    sideLink: "Orders",
    link: "#",
  },
];

// const dashboardData = [
//   {
//     title: "Personal Delivery",
//     desc: "For household items and other non-commercial goods.",
//     img: dash1,
//     href: "#",
//   },
//   {
//     title: "On-Demand Delivery",
//     desc: "Enjoy fast, urgent delivery for your smaller items.",
//     img: dash2,
//     href: "#",
//   },
//   {
//     title: "Commercial Delivery",
//     desc: "For businesses, bulk orders, inventory restocking, and multi-stop routes.",
//     img: dash3,
//     href: "#",
//   },
//   {
//     title: "Moving Assistance",
//     desc: "Get professional help loading, unloading and rearranging items.",
//     img: dash4,
//     href: "#",
//   },
// ];

type CargoValues = {
  cargoItemName: string;
  quantity: string;
  weight: string;
  attachment: File | null;
};

const initialValues: CargoValues = {
  cargoItemName: "",
  quantity: "",
  weight: "",
  attachment: null,
};

// const data = [
//   {
//     text: '23 Adegbonro street, Maci Walk 10232, Canada',
//     icon: ''
//   },
//   {
//     text: '24 Adegbonro street, Maci Walk 10232, Canada',
//     icon: ''
//   },
//   {
//     text: '24 Adegbonro street, Maci Walk 10232, Canada',
//     icon: ''
//   },
// ]

// interface Shipment {
//   id: string;
//   status: string;
//   shipperNumber: string;
//   totalAmount: string;
// }
// enum ShipmentEnum {
//   INTRANSIT = "In Transit",
//   COMPLETED = "Completed",
//   CANCELED = "Canceled"
// }

// const sampleData: Shipment[] = [
//   { id: "TRCMNT453RTR1", status: ShipmentEnum.COMPLETED, shipperNumber: "12330202e", totalAmount: "$12000" },
//   { id: "TRCMNT453RTR2", status: ShipmentEnum.INTRANSIT, shipperNumber: "12330202e", totalAmount: "$12000" },
//   { id: "TRCMNT453RTR3", status: ShipmentEnum.COMPLETED, shipperNumber: "12330202e", totalAmount: "$12000" },
//   { id: "TRCMNT453RTR4", status: ShipmentEnum.CANCELED, shipperNumber: "12330202e", totalAmount: "$12000" },
// ];

const tabData = [
  {
    label: "Item One",
    index: 0,
    component: "Child One"
  },
  {
    label: "Item Two",
    index: 1,
    component: "Child Two"
  },
  // {
  //   label: "Item Three",
  //   index: 2
  // },
]

export function CustomerHomePage() {
  // const [userInput, setUserInput] = useState('');
  // const [checked, setChecked] = useState(false);
  // const [radioChecked, setRadioChecked] = useState(false);
  // const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [radioActive, setRadioActive] = useState<boolean>(false)
  const [items, setItems] = useState<CargoValues[]>([]);
  // const [selected, setSelected] = useState<string>('');

// delete handler
const handleDelete = (idx: number) => {
  setItems((prev) => prev.filter((_, i) => i !== idx));
};

// add‐item handler opens modal
const handleAddClick = () => setOpen(true);

// on modal submit:
const handleModalSubmit = (values: CargoValues) => {
  setItems((prev) => [...prev, values]);
  setOpen(false);
};


  // const handleSubmit = () => {
  //   // We already have all the data in our states:
  //   console.log({
  //     userInput,
  //     checked,
  //     radioChecked,
  //     counter,
  //   });
  // };

  const handleSearch = useCallback(async (query: string) => {
    try {
      await simulateApiCall();
      console.log({ query });
      // Perform your data fetching logic here
      // Return the fetched data
      // eslint-disable-next-line
    } catch (error: unknown) {
      console.error("Failed to search assessments.");
    }
  }, []);

  const handleProfileClick = useCallback(() => {
    console.log("Profile clicked");
  }, []);

  const handleToggleAvailability = useCallback(async () => {
    setRadioActive(prev => !prev);
    try {
      await simulateApiCall();
      // Perform your data fetching logic here
      // Return the fetched data
      // eslint-disable-next-line
    } catch (error: unknown) {
      console.error("Failed to search assessments.");
    }
  }, []);

  return (
    <AppComponentDashboard
      headerProps={{
        handleSearchChange: handleSearch,
        profileProps: {
          firstName: "Adegboye",
          lastName: "Opeyemi",
          userMail: "yemyem@gmail.com",
          profileClick: handleProfileClick,
        },
      }}
      sidebarProps={{
        availability: true,
        links,
        radioChecked: radioActive,
        handleRadioClick: handleToggleAvailability,
      }}
    >
      <Grid container spacing={4}>
        <Grid
          size={{
            sm: 12,
            // md: 8,
            lg: 6,
          }}
        >
          <AppDropCode code="4Er24" />
          {/* <AppTabComponent  tabData={tabData} /> */}
          {/* <Grid container spacing={3}>
            <Grid size={12}>
              <AppDashboardBanner />
            </Grid>
            {dashboardData.map((item, index) => (
              <Grid size={6} key={index}>
                <AppLinkCard title={item.title} desc={item.desc} href={item.href} img={item.img} />
              </Grid>
            ))}
          </Grid> */}
          <AppGoogleMapsProvider apiKey="">
            <AppGoogleMap
              markerPositions={[
                // { lat: 37.7749, lng: -122.4194 },
                // { lat: 37.7749, lng: -130.4194 },
                // { lat: 37.7749, lng: -110.4194 },
                // { lat: 37.7749, lng: -150.4194 },
                // { lat: 37.7749, lng: -190.4194 },
              ]}
            />
          </AppGoogleMapsProvider>
          {/* <AppAutoComplete 
            apiKey=""
            afterUserInput="Need to carry cargo through elevator or stairs ?" 
            userInput={userInput}
            onUserInputChange={setUserInput}
            checked={checked}
            onCheckedChange={setChecked}
            radioChecked={radioChecked}
            onRadioCheckedChange={setRadioChecked}
            counter={counter}
            onCounterChange={setCounter}
            onSubmit={handleSubmit}
          />  */}

           <AppMultipleSelectField 
            items={items}
            onDelete={handleDelete}
            onAddClick={handleAddClick}
            addItem={false}
          />
          <AppModal
           open={open}
           handleClose={() => setOpen(false)}
           label="cargo items"
          >
            <Box
             sx={{
              padding: '30px 24px',
              width: '536px'
             }}
            >
              <RowStack sx={{ width: '100%' }} justifyContent={"space-between"}>
                <Typography
                 sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 600,
                  fontFamily: (theme) => theme.font.body,
                  fontSize: pxToRem(18),
                  lineHeight: '28px'
                 }}
                >Add cargo item</Typography>
                <AppButton
                 sx={{
                  background: 'none',
                  color: 'primary.main',
                  "&:hover": {
                    color: 'primary.main',
                    background: 'none'
                  }
                 }}
                 onClick={() => setOpen(false)}
                 disableArrow
                >cancel</AppButton>
              </RowStack>
              <Formik
               initialValues={initialValues}
               onSubmit={handleModalSubmit}
              >
                <Form>
                  <Stack spacing={2}>
                    <Stack spacing={1}>
                      <AppLabel label="Cargo item name" />
                      <FormikAppTextField 
                       name="cargoItemName"
                       placeholder="Enter cargo item name"
                       type="text"
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <AppLabel label="Quantity" />
                      <FormikAppTextField 
                       name="quantity"
                       placeholder="How many of the item do you want to move?"
                       type="text"
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <AppLabel label="Estimated weight (all quantities)" />
                      <AppDropdownField name="weight" dropdownData={["50ibs or less"]} />
                    </Stack>
                    <Stack spacing={1}>
                      <AppLabel label="Attachment" />
                      <AppFileField name="attachment" />
                    </Stack>
                  </Stack>
                  <AppButton 
                    type="submit"
                    sx={{ 
                      marginTop: '100px', 
                      width: '100%' 
                    }}
                  >Continue</AppButton>
                </Form>
              </Formik>
            </Box>
          </AppModal>
          {/* <AppAddressLink 
            data={data}
            activeIndex={1}
            minHeight="70px"
          /> */}
          {/* <AppChipAndChildren 
           data={sampleData}
           statusField="status"
           keyField="id"
           includeAll
          >
            {(shipment) => (    
              <OrderTrackingCard 
                callNum={shipment.shipperNumber}
                amount={shipment.totalAmount}
                trackId={shipment.id}
                status={shipment.status}
                onClick={() => setSelected(shipment.id)}
                active={shipment.id === selected}
              />
            )}
          </AppChipAndChildren>
          <AppSelectedVehicle 
           title="Pickup Truck"
           desc="This is great for 2 piece of furniture, lumber, small appliances or small hauling."
           img={flxfleetImg}
          /> */}
        </Grid>
        <Grid
          size={{
            sm: 6,
            md: 6,
            lg: 6,
          }}
        >
          <Stack spacing={3}>
            <AppMobileDownloadComponent />
            <StyledLink href="#">okay</StyledLink>
            <StyledImage
              src={flxfleetImg}
              alt="image"
              width={200}
              height={200}
              sx={{ height: "223px", borderRadius: "17px" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </AppComponentDashboard>
  );
}
