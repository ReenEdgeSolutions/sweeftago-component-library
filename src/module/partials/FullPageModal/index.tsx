"use client";

import { createContext } from "react";

export interface FullPageModalContextProps {
  onClose: () => void;
}

export const FullPageModalContext = createContext<FullPageModalContextProps>({
  onClose: () => {
    console.warn(
      "onClose called without a ModalProvider. Please ensure your component is wrapped with AppFullPageModal.",
    );
  },
});

export const FullPageModalProvider = FullPageModalContext.Provider;
