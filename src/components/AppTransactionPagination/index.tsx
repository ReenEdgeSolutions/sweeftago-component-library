import { Box, Pagination, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { pxToRem } from "../../common/utils";
import { AppDropdownField } from "../TextField";
import { TransactionData } from "../../common";
import { RowStack } from "../RowStack";
import sortIcon from "./ui/assets/icon/sort.svg"
import filterIcon from "./ui/assets/icon/filter.svg"
import { StyledImage } from "../StyledImage";

// Filter and sort data interface
export interface FilterSortData {
  label: string;
  value: string;
  action: (data: TransactionData[]) => TransactionData[];
}

interface AppTransactionPaginationProps {
  children: React.ReactNode;
  itemsPerPage: number;
  handleItemsPerPageChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalItems: number;
  totalPages: number;
  statusFilterData: FilterSortData[];
  dateSortData: FilterSortData[];
  handleFilterChange: (values: { statusFilter: string; dateSort: string }) => void;
}

export const AppTransactionPagination = ({
  children,
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  handlePageChange,
  totalItems,
  totalPages,
  statusFilterData,
  dateSortData,
  handleFilterChange
}: AppTransactionPaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const initialValues = {
    statusFilter: "Filter by status",
    dateSort: "Sort by date"
  };

  return (
    <Box width="100%">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Filter and Sort Controls */}
            <RowStack
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                mt: "24px",
                width: "100%",
                gap: 0,
              }}
            >
              <Box>
                <AppDropdownField
                  name="statusFilter"
                  placeholder="Filter by status"
                  dropdownData={statusFilterData.map((item: FilterSortData) => item.value)}
                  sx={{ width: "210px" }}
                  InputProps={{
                    startAdornment: (
                      <StyledImage
                        src={filterIcon}
                        alt="filter"
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "10px",
                        }}
                      />
                    )
                  }}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                    const newValue = e.target.value as string;
                    setFieldValue('statusFilter', newValue);
                    handleFilterChange({
                      ...values,
                      statusFilter: newValue
                    });
                  }}
                />
              </Box>

              <Box>
                <AppDropdownField
                  name="dateSort"
                  placeholder="Sort by date"
                  dropdownData={dateSortData.map((item: FilterSortData) => item.value)}
                  sx={{ width: "210px" }}
                  InputProps={{
                    startAdornment: (
                      <StyledImage
                        src={sortIcon}
                        alt="sort icon"
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "10px",
                        }}
                      />
                    )
                  }}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                    const newValue = e.target.value as string;
                    setFieldValue('dateSort', newValue);
                    handleFilterChange({
                      ...values,
                      dateSort: newValue
                    });
                  }}
                />
              </Box>

            </RowStack>
          </Form>
        )}
      </Formik>

      {/* Delivery Items */}
      {children}

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 400,
              color: '#615D5D',
              lineHeight: '140%',
            }}
          >
            Items per page
          </Typography>

          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #E0E0E0',
              fontSize: '14px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>

          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 400,
              color: '#615D5D',
              lineHeight: '140%',
            }}
          >
            {startIndex + 1}-{endIndex} of {totalItems} items
          </Typography>
        </Stack>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              '&.Mui-selected': {
                backgroundColor: '#F98D31',
                '&:hover': {
                  backgroundColor: '#ea580c',
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};