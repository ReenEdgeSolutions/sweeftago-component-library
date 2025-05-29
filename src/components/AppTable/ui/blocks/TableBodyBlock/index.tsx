import React from 'react';
import { TableBody, TableRow, Checkbox, TableCell, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { TableColumn, TableAction } from '../../../common';
import { TableBodyCell,  ActionCell , EmptyState, DeleteCell } from '../../components';
import { SxProps, Theme } from '@mui/material';

interface TableBodyBlockProps {
  data: Array<Record<string, string | number | boolean | null>>;
  filteredColumns: TableColumn[];
  actions: TableAction[];
  deleteActions: TableAction[];
  selectable: boolean;
  isSelected: (row: Record<string, string | number | boolean | null>) => boolean;
  onSelectRow: (row: Record<string, string | number | boolean | null>) => void;
  onActionClick: (event: React.MouseEvent<HTMLElement>, rowIndex: number) => void;
  loading: boolean;
  emptyMessage: string;
  bodyRowStyles?: SxProps<Theme>;
  bodyCellStyles?: SxProps<Theme>;
}

export const TableBodyBlock: React.FC<TableBodyBlockProps> = ({
  data,
  filteredColumns,
  actions,
  selectable,
  isSelected,
  onSelectRow,
  onActionClick,
  loading,
  emptyMessage,
  bodyRowStyles,
  bodyCellStyles,
  deleteActions
}) => {
  const totalColumns = filteredColumns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0) + (deleteActions.length > 0 ? 1 : 0);

  if (loading || data.length === 0) {
    return (
      <TableBody>
        <EmptyState
          colSpan={totalColumns}
          message={emptyMessage}
          loading={loading}
        />
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row, index) => (
        <TableRow
          key={row['id'] ? String(row['id']) : String(index)}
          hover
          selected={isSelected(row)}
          sx={{
            '&:hover': {
              backgroundColor: ' #f9f9f9',
            },
            ...bodyRowStyles,
          }}
        >
          {selectable && (
            <TableCell padding="checkbox">
              <Checkbox
                checked={isSelected(row)}
                onChange={() => onSelectRow(row)}
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
            <TableBodyCell
              key={column.id}
              column={column}
              value={
                row[column.id] !== undefined && typeof row[column.id] !== 'boolean'
                  ? (row[column.id] as string | number | Date | Record<string, unknown> | null)
                  : null
              }
              row={row}
              bodyCellStyles={bodyCellStyles}
            />
          ))}

          {actions.length > 0 && (
            <ActionCell
              actions={actions}
              row={row}
              rowIndex={index}
              onActionClick={onActionClick}
            />
          )}

          {deleteActions.length > 0 && (
            <DeleteCell
              actions={actions}
              row={row}
              rowIndex={index}
              onActionClick={onActionClick}
            />
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};