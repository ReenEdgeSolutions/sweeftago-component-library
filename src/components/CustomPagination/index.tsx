import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography, IconButton } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { pxToRem } from "../../common";

export interface CustomPaginationProps {
  itemsPerPage: number;
  handleItemsPerPageChange: (itemsPerPage: number) => void;
  currentPage: number;
  handlePageChange: (page: number) => void;
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
  pageIndex = [5,10,20, 50]
}: CustomPaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handleMuiItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    const newPageSize = event.target.value as number;
    handleItemsPerPageChange(newPageSize);
  };

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + 2);

    // Adjust if we're near the end
    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return(
    <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
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
          onChange={handleMuiItemsPerPageChange}
          size="small"
          displayEmpty
          IconComponent={KeyboardArrowDown}
          sx={{
            fontStyle: 'normal',
            color: "#797979",
            backgroundColor: 'inherit',
            borderRadius: '4px',
            minWidth:  "60px",
            '& .MuiSelect-select': {
              padding: '6px 32px 6px 12px !important',
              minHeight: 'unset !important',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiSelect-icon': {
              right: '8px',
              color: '#797979',
            },
            '& .MuiOutlinedInput-input': {
              padding: '0 !important',
              px: '10px !important',
            },
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
            fontSize: {
              xm: pxToRem(12),
              md: pxToRem(14)
            },
            fontWeight: 400,
            color: '#797979',
            lineHeight: '140%',
          }}
        >
          {startIndex + 1}-{endIndex} of {totalItems} items
        </Typography>
      </Stack>

      {/* Custom Pagination */}
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{
            width:{xs: 24, md: 32},
            height: {xs: 24, md: 32},
            color: currentPage === 1 ? '#ccc' : '#666',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        {visiblePages.map((page) => (
          <IconButton
            key={page}
            onClick={() => handlePageChange(page)}
            sx={{
              width: {xs: 24, md: 32},
              height: {xs: 24, md: 32},
              borderRadius: '50%',
              fontSize: {
                xs: pxToRem(12),
                md: pxToRem(14)
              },
              fontWeight: {xs: 400, md: 500},
              color: page === currentPage ? '#fff' : '#666',
              backgroundColor: page === currentPage ? '#F98D31' : 'transparent',
              '&:hover': {
                backgroundColor: page === currentPage ? '#F98D31' : 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            {page}
          </IconButton>
        ))}

        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          sx={{
            width: {xs: 24, md: 32},
            height: {xs: 24, md: 32},
            color: currentPage === totalPages ? '#ccc' : '#666',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Stack>
    </Box>
  )
}