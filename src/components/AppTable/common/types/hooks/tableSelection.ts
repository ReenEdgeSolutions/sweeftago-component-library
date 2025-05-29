
export interface tableSelectionReturnProps {
  selectedRows: any[];
  setSelectedRows?: (rows: any[]) => void;
  handleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectRow: (row: any) => void;
  isSelected: (row: any) => boolean;
  isIndeterminate: boolean;
  isAllSelected: boolean;
}

export interface tableSelectionProps {
  data: any[];
  onSelectionChange?: (selectedRows: any[]) => void;
}