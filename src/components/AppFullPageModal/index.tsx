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
          background: "white",
          padding: "40px 0",
        },
      }}
      {...rest}
      fullScreen
      keepMounted={false}
      onClose={handleDialogClose} // Use the wrapped handler
    >
      {/* Provide the onClose function via context */}
      <FullPageModalProvider value={{ onClose: onClose }}>{children}</FullPageModalProvider>
    </Dialog>
  );
};
