import React, { forwardRef, PropsWithChildren, ReactElement, Ref } from "react";
import { Dialog, DialogProps, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { FullPageModalProvider } from "../../module/partials";

// Define the props for the AppFullPageModal by omitting 'onClose' from DialogProps and redefining it
export type AppFullPageModalProps = PropsWithChildren<
  Omit<DialogProps, "onClose"> & { onClose: () => void }
>;

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

// Create the AppFullPageModal component
export const AppFullPageModal = ({ children, onClose, ...rest }: AppFullPageModalProps) => {
  // Define a handler that matches Dialog's onClose signature
  const handleDialogClose = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _event: React.SyntheticEvent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _reason: "backdropClick" | "escapeKeyDown",
  ) => {
    onClose();
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          background: "#f9f9f9",
          padding: 0,
          // Ensure the modal content can handle menu overlays
          position: "relative",
          overflow: "visible", // Allow menu to overflow if needed
        },
      }}
      // Prevent backdrop clicks from interfering with menu
      BackdropProps={{
        sx: {
          // Lower z-index for backdrop to allow menu to appear above
          zIndex: -1,
        },
        // Prevent backdrop from blocking menu interactions
        onClick: (e) => {
          e.stopPropagation();
        }
      }}
      {...rest}
      fullScreen
      keepMounted={false}
      onClose={handleDialogClose}
      // Allow menu interactions by not closing on backdrop click
      disableEscapeKeyDown={false}
      // Ensure proper stacking context
      sx={{
        zIndex: 1000, // Standard MUI Dialog z-index
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
          // Ensure this container doesn't interfere with menu
          zIndex: 'auto'
        }}>
          {children}
        </div>
      </FullPageModalProvider>
    </Dialog>
  );
};