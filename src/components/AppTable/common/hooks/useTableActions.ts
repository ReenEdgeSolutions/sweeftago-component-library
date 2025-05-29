"use client";
import { useState } from "react";

export interface TableActionReturnProps {
  anchorEl: HTMLElement | null;
  currentRowIndex: number;
  handleActionClick: (event: React.MouseEvent<HTMLElement>, rowIndex: number) => void;
  handleActionClose: () => void;
}

export const useTableActions = () :TableActionReturnProps => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentRowIndex, setCurrentRowIndex] = useState<number>(-1);

  const handleActionClick = (event: React.MouseEvent<HTMLElement>, rowIndex: number): void => {
    setAnchorEl(event.currentTarget);
    setCurrentRowIndex(rowIndex);
  };

  const handleActionClose = (): void => {
    setAnchorEl(null);
    setCurrentRowIndex(-1);
  };

  return {
    anchorEl,
    currentRowIndex,
    handleActionClick,
    handleActionClose,
  };
};