"use client"
import { useMemo, useState } from "react";
import { allDeliveries, enhanceDeliveryData, getStatusStyles, } from "./common";
import amountIcon from './ui/components/assets/icons/amount-icon.svg';
import distanceIcon from './ui/components/assets/icons/distance-icon.svg';
import arrowIcon from './ui/components/assets/icons/right-arrow.svg';
import driverIcon from './ui/components/assets/icons/driver-icon.svg';
import {  AppDeliveryTable, DeliveryRequestCard } from "@component-library";
import { SelectChangeEvent, Box,Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export const VendorDashboardInfo = (isProfileComplete: {isProfileComplete: boolean}) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  // const [selectedDelivery, setSelectedDelivery] = useState<ExtendedDelivery | null>(null);


  // Precompute status info for allDeliveries to avoid calling hooks inside map or callback
  const statusMap = useMemo(() => {
    const map = new Map<string, { color: string; backgroundColor: string }>();
    allDeliveries.forEach(d => {
      map.set(d.status || "", getStatusStyles(d.status || ""));
    });
    return map;
  }, []);

  const filteredDeliveries = useMemo(() => {
    switch (currentTab) {
      case 0: // All
        return allDeliveries;
      case 1: // Ongoing (In Transit)
        return allDeliveries.filter(item => item.status === 'In Transit');
      case 2: // Scheduled
        return allDeliveries.filter(item => item.status === 'Scheduled');
      case 3: // Completed
        return allDeliveries.filter(item => item.status === 'Completed');
      case 4: // Canceled
        return allDeliveries.filter(item => item.status === 'Canceled');
      default:
        return allDeliveries;
    }
  }, [currentTab]);

   // Calculate counts for each tab
   const tabCounts = useMemo(() => ({
    all: allDeliveries.length,
    ongoing: allDeliveries.filter(item => item.status === 'In Transit').length,
    scheduled: allDeliveries.filter(item => item.status === 'Scheduled').length,
    completed: allDeliveries.filter(item => item.status === 'Completed').length,
    canceled: allDeliveries.filter(item => item.status === 'Canceled').length,
  }), []);

  // Pagination calculations
  const totalItems = filteredDeliveries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredDeliveries.slice(startIndex, endIndex);

  const tabs = [
    { label: 'All', count: tabCounts.all },
    { label: 'Ongoing', count: tabCounts.ongoing },
    { label: 'Scheduled', count: tabCounts.scheduled },
    { label: 'Completed', count: tabCounts.completed },
    { label: 'Canceled', count: tabCounts.canceled },
  ];

  const handleTabChange = (_t: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    const value = Number(event.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleViewDetails = (id: string) => {
    // Find the delivery by ID
    const delivery = allDeliveries.find(item => item.id === id);

    if (delivery) {
      // Enhance the delivery data with additional fields
      const enhancedDelivery = enhanceDeliveryData(delivery);
      // You can also return the delivery data if needed elsewhere
      console.log('Delivery details:', enhancedDelivery);
      return enhancedDelivery;
    }

    console.warn('Delivery not found with ID:', id);
    return null;
  };



  return (
    <>
      <AppDeliveryTable
        isProfileComplete={isProfileComplete.isProfileComplete}
        handleTabChange={handleTabChange}
        currentTab={currentTab}
        TabData={tabs}
        appDeliveryPanel={{
        panelTitle: "My Delivery Request",
        handleExport: () => console.log("Export"),
        handleViewSavedDraft: () => {
          router.push("/vendor/home/saved-drafts")
        },
        requestsBtnText: "New Delivery Request",
        handleRequestsBtnClick: () => router.push("/vendor/home/delivery-request"),
        showSavedDraft: true,
        }}
        paginationProps={{
          currentPage,
          totalPages,
          handlePageChange: (page) => handlePageChange(page),
          itemsPerPage,
          handleItemsPerPageChange: (itemsPerPage: number) => handleItemsPerPageChange({ target: { value: itemsPerPage } } as SelectChangeEvent<number>),
          totalItems,
        }}
        emptyAddDeliveryStateProps={{
          handleCreateNewDelivery: () => router.push("/vendor/home/delivery-request"),
          isSetUpCompletted: isProfileComplete.isProfileComplete,
          showCreateNewDeliveryBtn: true,
          emptyDeliveryguideText: "You haven't made any delivery requests yet.  Let's help you schedule your first started",
        }}
      >
        <Stack spacing="25px" mb="24px">
          { currentItems.map((item) => {
            const statusInfo = statusMap.get(item.status || "") || { color: "", backgroundColor: "" };
            return (
              <Box key={item.id} >
                <DeliveryRequestCard
                  handleViewDetails={handleViewDetails}
                  deliveryId={item.id}
                  amount={item.amount?.toString() || ""}
                  pickUpLocation={item.pickup || ""}
                  dropOffLocation={item.dropoff || ""}
                  amountIcon={amountIcon}
                  distanceIcon={distanceIcon}
                  arrowIcon={arrowIcon}
                  timeAway={item.timeAway || ""}
                  driver={item.driver || ""}
                  driverIcon={driverIcon}
                  status={item.status || ""}
                  color={statusInfo.color}
                  bgColor={statusInfo.backgroundColor}
                />
              </Box>
            )
          })}
        </Stack>
      </AppDeliveryTable>
    </>
  )
}
