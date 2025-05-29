import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { TableColumn } from '../../../common';
import { SxProps, Theme } from '@mui/material';

interface TableHeaderRowProps {
  selectable: boolean;
  isIndeterminate: boolean;
  isAllSelected: boolean;
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredColumns: TableColumn[];
  hasActions: boolean;
  hasDelete?: boolean;
  headerCellStyles?: SxProps<Theme>;
}

export const TableHeaderRow: React.FC<TableHeaderRowProps> = ({
  selectable,
  isIndeterminate,
  isAllSelected,
  onSelectAll,
  filteredColumns,
  hasActions,
  hasDelete,
  headerCellStyles,
}) => (
  <TableHead>
    <TableRow sx={{backgroundColor: '#EAEAEA'}}>
      {selectable && (
        <TableCell padding="checkbox"
          sx={{backgroundColor: '#EAEAEA',p: "22px, 26px"}}>
          <Checkbox
            indeterminate={isIndeterminate}
            checked={isAllSelected}
            onChange={onSelectAll}
            icon={
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: 2,
                  border: '1px solid #ccc',
                }}
              />
            }
            checkedIcon={
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#F98D31',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckIcon sx={{ fontSize: 18, color: '#1A1A1A' }} />
              </Box>
            }
          />
        </TableCell>
      )}
      {filteredColumns.map((column) => (
        <TableCell
          key={column.id}
          align={column.align || 'left'}
          sx={{
            fontWeight: 500,
            backgroundColor: '#EAEAEA',
            width: column.width,
            padding: '22px 26px',
            ...headerCellStyles,
          }}
        >
          {column.label}
        </TableCell>
      ))}
      {hasActions && (
        <TableCell
          align="center"
          sx={{
            fontWeight: 500,
            backgroundColor: '#EAEAEA',
            width: 60,
            ...headerCellStyles,
          }}
        >

        </TableCell>
      )}

      {hasDelete && (
        <TableCell
          align="center"
          sx={{
            fontWeight: 500,
            backgroundColor: '#EAEAEA',
            width: 60,
            ...headerCellStyles,
          }}
        >

        </TableCell>
      )}
    </TableRow>
  </TableHead>
);