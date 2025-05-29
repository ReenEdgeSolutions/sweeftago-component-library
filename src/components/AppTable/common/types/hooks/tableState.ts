import { SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { TableColumn } from "../table";



export interface UseTableStateProps {
  data: any[];
  columns: TableColumn[];
  maxVisibleColumns: number;
  defaultItemsPerPage: number;
  showPagination: boolean;
}

export interface UseTableStateReturn {
  selectedRows: any[];
  setSelectedRows: Dispatch<SetStateAction<any[]>>;
  visibleColumns: string[];
  filteredColumns: TableColumn[];
  paginatedData: any[];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleItemsPerPageChange: (event: SelectChangeEvent<number>) => void;
  handleColumnToggle: (columnId: string) => void;
}