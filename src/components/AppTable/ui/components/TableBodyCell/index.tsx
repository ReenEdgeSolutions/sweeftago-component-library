import React from 'react';
import { TableCell } from '@mui/material';
import { TableColumn } from '../../../common';
import { SxProps, Theme } from '@mui/material';
import { StatusRenderer } from '../StatusRenderer';
import { AvatarRenderer } from '../AvatarRenderer';
import { DateRenderer } from '../DateRenderer';

interface TableBodyCellProps {
  column: TableColumn;
  value: string | number | Date | Record<string, unknown> | null
  row: Record<string, unknown>;
  bodyCellStyles?: SxProps<Theme>;
}

export const TableBodyCell: React.FC<TableBodyCellProps> = ({
  column,
  value,
  row,
  bodyCellStyles,
}) => {
  const renderCellValue = () => {
    // First check if column has a custom render function
    if (column.render) {
      console.log("Using custom render for column:", column.id); // Debug log
      return column.render({ value, row });
    }

    if (column.format) {
      return column.format(value, row);
    }

    // Apply default formatters based on column id
    if (column.id.toLowerCase().includes('status')) {
      return <StatusRenderer status={String(value || '')} />;
    }
    if (column.id.toLowerCase().includes('name') && !column.id.toLowerCase().includes('phone')) {
      return <AvatarRenderer value={value && typeof value === 'object' && 'src' in value ? String(value['src']) : String(value || '')} row={row} />;
    }
    if (column.id.toLowerCase().includes('date')) {
      return (typeof value === 'string' || typeof value === 'number' || value instanceof Date) ? (
        <DateRenderer value={value} />
      ) : (
        '-'
      );
    }

    return value instanceof Date
      ? value.toISOString()
      : typeof value === 'object' && value !== null
      ? JSON.stringify(value)
      : String(value || '-');
  };

  return (
    <TableCell
      align={column.align || 'left'}
      sx={bodyCellStyles}
    >
      {(() => {
        const cellValue = renderCellValue();
        return React.isValidElement(cellValue) || typeof cellValue === 'string' || typeof cellValue === 'number'
          ? cellValue
          : null;
      })()}
    </TableCell>
  );
};