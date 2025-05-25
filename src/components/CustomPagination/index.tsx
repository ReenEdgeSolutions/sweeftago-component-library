import { Box, MenuItem, Pagination, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { pxToRem } from "src/common";

export interface CustomPaginationProps {
  itemsPerPage: number;
  handleItemsPerPageChange: (event: SelectChangeEvent<number>) => void;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalItems: number;
  totalPages: number;
}

export const CustomPagination = ({
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  handlePageChange,
  totalItems,
  totalPages,
}: CustomPaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

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
            minWidth: 80,
            fontStyle: itemsPerPage ? 'normal' : 'italic',
            color: itemsPerPage ? 'text.primary' : 'text.secondary',
            '.MuiSvgIcon-root': {
              color: 'text.primary',
            },
            backgroundColor: '#fff',
            borderRadius: '4px',
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
          {[3, 5, 10, 25].map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

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
  )
}