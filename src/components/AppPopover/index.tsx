import { Popover, Slide } from "@mui/material";
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
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      TransitionComponent={Slide}
      TransitionProps={{
      }}
      slotProps={{
        paper: {
          style: {
            marginTop: "30px",
            marginRight: "30px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9"
          },
        },
      }}
    >
      {children}
    </Popover>
  );
};