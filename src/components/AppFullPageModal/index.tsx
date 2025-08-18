import React, { forwardRef, ReactElement, Ref } from "react";
import { Dialog, DialogProps, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { FullPageModalProvider } from "../../module/partials";

// Define the transition for the modal
const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement },
  ref: Ref<unknown>,
) {
  return (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  );
});

interface AppFullPageModalProps extends Omit<DialogProps, "onClose"> {
  children?: React.ReactNode;
  onClose: () => void;
  offSetZIndex?: boolean;
}

export const AppFullPageModal = ({
  children,
  offSetZIndex = false,
  onClose,
  ...rest
}: AppFullPageModalProps) => {
  const handleDialogClose = (
    _event: React.SyntheticEvent,
    _reason: "backdropClick" | "escapeKeyDown",
  ) => {
    onClose();
  };

  if (offSetZIndex) {
    return (
      <Dialog
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            background: "#f9f9f9",
            padding: 0,
            position: "relative",
            overflow: "auto",
          },
        }}
        {...rest}
        fullScreen
        keepMounted={false}
        onClose={handleDialogClose}
      >
        {/* Provide the onClose function via context */}
        <FullPageModalProvider value={{ onClose: onClose }}>
          {children}
        </FullPageModalProvider>
      </Dialog>
    );
  }


  return (
    <Dialog
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          background: "#f9f9f9",
          padding: 0,
          position: "relative",
          overflow: "auto",
        },
      }}
      BackdropProps={{
        sx: {
          zIndex: -1,
        },
        onClick: (e) => {
          e.stopPropagation();
        }
      }}
      {...rest}
      fullScreen
      keepMounted={false}
      onClose={handleDialogClose}
      disableEscapeKeyDown={false}
      sx={{
        zIndex: 1000,
        ...rest.sx
      }}
    >
      {/* Provide the onClose function via context */}
      <FullPageModalProvider value={{ onClose: onClose }}>
        {/* Wrapper to handle menu positioning */}
        <div style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          zIndex: 'auto'
        }}>
          {children}
        </div>
      </FullPageModalProvider>
    </Dialog>
  );
};

// Export the type for external use
export type { AppFullPageModalProps };