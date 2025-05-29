"use client"
import { useState } from "react";
import { tableSelectionReturnProps } from "../types";


interface UseTableSelectionProps {
  data: any[];
  onSelectionChange?: (selectedRows: any[]) => void;
}

export const useTableSelection = ({
  data,
  onSelectionChange
}: UseTableSelectionProps): tableSelectionReturnProps => {

  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSelection = event.target.checked ? data : [];
    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  const handleSelectRow = (row: any): void => {
    const isSelected = selectedRows.some(selected => selected.id === row.id);
    let newSelection;

    if (isSelected) {
      newSelection = selectedRows.filter(selected => selected.id !== row.id);
    } else {
      newSelection = [...selectedRows, row];
    }

    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  const isSelected = (row: any): boolean => selectedRows.some(selected => selected.id === row.id);
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;
  const isAllSelected = data.length > 0 && selectedRows.length === data.length;

  return {
    selectedRows,
    handleSelectAll,
    handleSelectRow,
    isSelected,
    isIndeterminate,
    isAllSelected,
  };
};