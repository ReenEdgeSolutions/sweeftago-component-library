"use client";
import React, { useState, useCallback } from "react";
import {
  AppTable,
  GridColSpec,
  GridDataFetchResult,
  GridSortSpec,
  StatusRenderer,
  AppDeliveryCards,
  AppButton,
  StyledImage,
  StatusType,
} from "@component-library";
import { deliveryData6, financialData } from "./ui/common/data";
import { Box, Stack, Typography } from "@mui/material";
import { GridPaginationModel } from "@mui/x-data-grid";
import downloadIcon from "./ui/assets/icons/export.svg";

type FinancialData = {
  id: string; // required by AppTable
  date: string;
  deliveryID: string;
  rider: string;
  totalCharge: string;
  platformFee: string;
  riderEarnings: string;
  status: string;
  // [key: string]: any;
};

export const LogisticsFinancials = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 6,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const fetchData = useCallback(
    async (
      page: number,
      pageSize: number,
      sortModel: GridSortSpec<FinancialData>[]
    ): Promise<GridDataFetchResult<FinancialData>> => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const data = [...financialData];

      if (sortModel.length > 0) {
        const { field, sort } = sortModel[0] || {};
        data.sort((a, b) => {
          const aVal = a[field as keyof typeof a];
          const bVal = b[field as keyof typeof b];
          if (sort === "asc") {
            return (aVal ?? "").toString() > (bVal ?? "").toString() ? 1 : -1;
          } else {
            return (aVal ?? "").toString() < (bVal ?? "").toString() ? 1 : -1;
          }
        });
      }

      const totalRows = data.length;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = data.slice(startIndex, endIndex);

      setTotalPages(Math.ceil(totalRows / pageSize));
      setTotalItems(totalRows);

      return {
        rows: paginatedData.map((item) => ({
          ...item,
          id: item.deliveryID,
        })),
        totalRows,
      };
    },
    []
  );

  const financialColumns: GridColSpec<FinancialData>[] = [
    { field: "date", headerName: "Date", flex: 1, minWidth: 150 },
    { field: "deliveryID", headerName: "Delivery ID", flex: 1, minWidth: 150 },
    { field: "rider", headerName: "Rider", flex: 1, minWidth: 150 },
    { field: "totalCharge", headerName: "Total Charge", flex: 1, minWidth: 150 },
    { field: "platformFee", headerName: "Platform Fee", flex: 1, minWidth: 150 },
    { field: "riderEarnings", headerName: "Rider Earnings", flex: 1, minWidth: 150 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => <StatusRenderer status={params.value as StatusType | undefined} />,
    },
  ];

  const handleExport = () => {
    console.log("Export clicked");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPaginationModel((prev) => ({ ...prev, page: page - 1 }));
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setPaginationModel({ page: 0, pageSize: itemsPerPage });
    setCurrentPage(1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <AppDeliveryCards deliverydata={deliveryData6} isProfileComplete={true} />

      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "120px",
          color: "#252423",
        }}
      >
        Transaction History
      </Typography>

      <Stack spacing="24px">
        <AppButton
          onClick={handleExport}
          disableArrow
          startIcon={
            <StyledImage
              src={downloadIcon}
              alt="download"
              sx={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          sx={{
            width: "119px",
            color: "#615D5D",
            border: "1px solid #D5D5D5",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Export
        </AppButton>

        <AppTable
          columns={financialColumns}
          fetchData={fetchData}
          showPagination={true}
          selectable={true}
          initialPageSize={6}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          itemsPerPage={paginationModel.pageSize}
          handleItemsPerPageChange={handleItemsPerPageChange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalItems={totalItems}
          totalPages={totalPages}
          disableRowClick={false}
        />
      </Stack>
    </Box>
  );
};
