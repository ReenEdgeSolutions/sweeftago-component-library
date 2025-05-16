"use client"
import { useContext } from "react";
import { FullPageModalContext, FullPageModalContextProps } from "../../../module/partials";

export function useFullPageModal(): FullPageModalContextProps {
  const context = useContext(FullPageModalContext);

  if (!context) {
    throw new Error("useFullPageModal must be used within a FullModalProvider");
  }

  return context;
}
