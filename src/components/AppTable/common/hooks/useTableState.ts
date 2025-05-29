"use client"
import { useState, useMemo } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { UseTableStateProps, UseTableStateReturn } from '../types';

export const useTableState = ({
  data,
  columns,
  maxVisibleColumns,
  defaultItemsPerPage,
  showPagination,
}: UseTableStateProps): UseTableStateReturn => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.slice(0, maxVisibleColumns).map(col => col.id)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const filteredColumns = useMemo(() =>
    columns.filter(col => visibleColumns.includes(col.id)),
    [columns, visibleColumns]
  );

  const paginatedData = useMemo(() => {
    if (!showPagination) return data;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage, showPagination]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    setCurrentPage(value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>): void => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleColumnToggle = (columnId: string): void => {
    setVisibleColumns(prev => {
      if (prev.includes(columnId)) {
        return prev.filter(id => id !== columnId);
      } else if (prev.length < maxVisibleColumns) {
        return [...prev, columnId];
      }
      return prev;
    });
  };

  return {
    selectedRows,
    setSelectedRows,
    visibleColumns,
    filteredColumns,
    paginatedData,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
    handleColumnToggle,
  };
};
