import React from 'react';
import { Menu, MenuItem, Box } from '@mui/material';
import { TableAction } from '../../../common';

interface ActionsMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  actions: TableAction[];
  currentRow: Record<string, unknown>;
  currentRowIndex: number;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({
  anchorEl,
  open,
  onClose,
  actions,
  currentRow,
  currentRowIndex,
}) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    {actions.map((action, actionIndex) => {
      const isDisabled = action.disabled ? action.disabled(currentRow) : false;

      return (
        <MenuItem
          key={actionIndex}
          onClick={() => {
            if (!isDisabled && currentRow) {
              action.onClick(currentRow, currentRowIndex);
              onClose();
            }
          }}
          disabled={isDisabled}
          sx={{
            color: action.color ? `${action.color}.main` : 'text.primary',
          }}
        >
          {action.icon && (
            <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
              {action.icon}
            </Box>
          )}
          {action.label}
        </MenuItem>
      );
    })}
  </Menu>
);