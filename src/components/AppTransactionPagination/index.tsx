import { Box, SelectChangeEvent} from "@mui/material";
import { Form, Formik } from "formik";
import { AppDropdownField } from "../TextField";
import { TransactionData } from "../../common";
import { RowStack } from "../RowStack";
import sortIcon from "./ui/assets/icon/sort.svg"
import filterIcon from "./ui/assets/icon/filter.svg"
import { StyledImage } from "../StyledImage";
import { CustomPagination } from "../CustomPagination";

// Filter and sort data interface
export interface FilterSortData {
  label: string;
  value: string;
  action: (data: TransactionData[]) => TransactionData[];
}

interface AppTransactionPaginationProps {
  children: React.ReactNode;
  itemsPerPage: number;
  handleItemsPerPageChange: (event: SelectChangeEvent<number>) => void
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
      <CustomPagination
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalItems={totalItems}
        totalPages={totalPages}
        pageIndex={[6,12,18,24]}
      />
    </Box>
  );
};