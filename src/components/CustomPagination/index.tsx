import { Box, MenuItem, Pagination, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { pxToRem } from "../../common";

export interface CustomPaginationProps {
  itemsPerPage: number;
  handleItemsPerPageChange: (event: SelectChangeEvent<number>) => void;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalItems: number;
  totalPages: number;
  pageIndex?: number[];
}

export const CustomPagination = ({
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  handlePageChange,
  totalItems,
  totalPages,
  pageIndex = [3, 5, 10, 25]
}: CustomPaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  if (totalItems === 0) return null;

  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          size="small"
          displayEmpty
          IconComponent={KeyboardArrowDown}
          sx={{
            fontStyle: itemsPerPage ? 'normal' : 'italic',
            color: "#797979",
            backgroundColor: '#fff',
            borderRadius: '4px',
            minWidth: '60px', // Add minimum width to accommodate icon
            // Style the select input
            '& .MuiSelect-select': {
              padding: '6px 32px 6px 12px !important', // Add right padding for icon
              minHeight: 'unset !important',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
            },
            // Position the dropdown icon inside the box
            '& .MuiSelect-icon': {
              right: '8px', // Position icon inside the box
              color: '#797979',
            },
            // Remove default outlined input padding
            '& .MuiOutlinedInput-input': {
              padding: '0 !important',
              px: '10px !important',
            },
            // Keep border color consistent and remove outline
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D6D4D1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D6D4D1',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D6D4D1',
              boxShadow: 'none',
              outline: 'none',
            },
          }}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Items</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Items</em>
          </MenuItem>
          {pageIndex.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 400,
            color: '#797979',
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
                backgroundColor: '#F98D31'
              },
            },
          },
        }}
      />
    </Box>
  )
}