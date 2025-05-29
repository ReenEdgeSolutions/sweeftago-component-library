import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import { TableAction } from '../../../common';
import { StyledImage } from '../../../../StyledImage/index';
import deleteIcon from "../../assets/icon/delete2.svg"

interface ActionCellProps {
  actions: TableAction[];
  row: Record<string, unknown>;
  rowIndex: number;
  onActionClick: (event: React.MouseEvent<HTMLElement>, rowIndex: number) => void;
}

export const DeleteCell: React.FC<ActionCellProps> = ({
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
        <StyledImage
          src={deleteIcon}
          alt="delete"
          sx={{
            width: "24px",
            height: "24px"
          }}
        />
      </IconButton>
    </TableCell>
  );
};