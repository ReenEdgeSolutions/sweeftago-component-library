import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { TableAction } from '../../../common';

interface ActionCellProps {
  actions: TableAction[];
  row: Record<string, unknown>;
  rowIndex: number;
  onActionClick: (event: React.MouseEvent<HTMLElement>, rowIndex: number) => void;
}

export const ActionCell: React.FC<ActionCellProps> = ({
  actions,
  row,
  rowIndex,
  onActionClick,
}) => {
  const isDisabled = actions.every(action =>
    action.disabled ? action.disabled(row) : false
  );

  return (
    <TableCell align="center">
      <IconButton
        size="small"
        onClick={(e) => onActionClick(e, rowIndex)}
        disabled={isDisabled}
      >
        <MoreVert />
      </IconButton>
    </TableCell>
  );
};