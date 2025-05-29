"use client";
import { useState } from "react";

export interface ColumnCustomizationReturnProps {
  customizeAnchor: null | HTMLElement;
  handleCustomizeClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleCustomizeClose: () => void;
}

export const useColumnCustomization = () :ColumnCustomizationReturnProps => {
  const [customizeAnchor, setCustomizeAnchor] = useState<null | HTMLElement>(null);

  const handleCustomizeClick = (event: React.MouseEvent<HTMLElement>): void => {
    setCustomizeAnchor(event.currentTarget);
  };

  const handleCustomizeClose = () : void => {
    setCustomizeAnchor(null);
  };

  return {
    customizeAnchor,
    handleCustomizeClick,
    handleCustomizeClose,
  };
};