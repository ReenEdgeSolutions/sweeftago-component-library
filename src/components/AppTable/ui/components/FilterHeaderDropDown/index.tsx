import { Box, Typography, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { RowStack } from "../../../../RowStack";
import { pxToRem } from "../../../../../common"

interface FilterHeaderDropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelectionChange: (value: string) => void;
}

export const FilterHeaderDropdown: React.FC<FilterHeaderDropdownProps> = ({
  label,
  options,
  onSelectionChange
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onSelectionChange(event.target.value);
  };

  return (
    <RowStack sx={{ alignItems: 'center', gap: 0 }}>
      <Typography variant="inherit" sx={{ fontWeight: 'inherit', minWidth: 'fit-content' }}>
        {label}
      </Typography>
      <Box sx={{ minWidth: 20, position: 'relative', marginLeft: '10px' }}>
        <Select
          value=""
          onChange={handleChange}
          displayEmpty
          variant="standard"
          disableUnderline
          IconComponent={KeyboardArrowDown}
          renderValue={() => ""}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
                overflowY: 'auto',
                paddingY: '8px',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                // Smooth dropdown animation
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                // Custom scrollbar styling
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#a8a8a8',
                },
              },
            },
            // Add smooth transition to the menu itself
            TransitionProps: {
              timeout: 300,
            },
          }}
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 400,
            color: '#252423',
            minWidth: '20px',
            width: '20px',
            // Style the select input - hide the selected value display
            '& .MuiSelect-select': {
              padding: '0 !important',
              paddingRight: '20px !important',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '20px',
              display: 'flex',
              alignItems: 'center',
              width: '20px',
              minWidth: '20px',
              '&:focus': {
                backgroundColor: 'transparent',
              },
            },
            // Style the dropdown arrow
            '& .MuiSvgIcon-root': {
              color: '#252423',
              fontSize: pxToRem(18),
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              right: '0px',
              position: 'absolute',
            },
            // Rotate arrow when dropdown is open
            '&.Mui-expanded .MuiSvgIcon-root': {
              transform: 'rotate(180deg)',
            },
            // Remove default focus styles
            '&.Mui-focused': {
              backgroundColor: 'transparent',
            },
            // Hover effect
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              borderRadius: '4px',
            },
          }}
        >
          <MenuItem value="All" sx={{
            fontSize: pxToRem(14),
            padding: '8px 16px',
            margin: '0 8px',
            borderRadius: '6px',
            transition: '0.2s ease',
            textAlign: 'left',
            justifyContent: 'flex-start',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(249, 141, 49, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(249, 141, 49, 0.15)',
              },
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}>
            All
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                fontSize: pxToRem(14),
                padding: '8px 16px',
                margin: '0 8px',
                borderRadius: '6px',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(249, 141, 49, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(249, 141, 49, 0.15)',
                  },
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </RowStack>
  );
};