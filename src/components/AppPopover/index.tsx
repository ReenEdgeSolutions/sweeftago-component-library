import { Popover } from "@mui/material";
import React from "react";

type AppPopoverProps = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: React.ReactNode;
};

export const AppPopover = ({ id, open, anchorEl, handleClose, children }: AppPopoverProps) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {children}
    </Popover>
  );
};
