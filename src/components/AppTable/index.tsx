"use client";
import {
  Box,
  Table,
  TableContainer,
  Paper,
} from '@mui/material';

import {
  useTableState,
  useTableSelection,
  useTableActions,
  useColumnCustomization,
} from './common';

import { TableHeader, TableHeaderRow} from './ui/components';

import {
  TableBodyBlock,
  ActionsMenu,
 } from './ui/blocks';
import { CustomPagination } from '../CustomPagination';
import { ColumnCustomizationModal } from './ui/blocks';

import { TableColumn, TableAction, TableStyles } from './common';

export interface AppTableProps {
  data: Record<string, unknown>[];
  columns: TableColumn[];
  actions?: TableAction[];
  deleteActions?: TableAction[];
  showCustomizeButton?: boolean;
  showPagination?: boolean;
  maxVisibleColumns?: number;
  defaultItemsPerPage?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedRows: Record<string, unknown>[]) => void;
  styles?: TableStyles;
  emptyMessage?: string;
  loading?: boolean;
  title?: string;
  handleExport?: () => void;
  showTitle?: boolean;
  showAddRiderButton?: boolean;
  handleRiderAddClick?: () => void;
  handleDeleteAsignRider?: (data: number) => void;
}

export const AppTable: React.FC<AppTableProps> = ({
  data = [],
  columns = [],
  actions = [],
  deleteActions = [],
  showCustomizeButton = false,
  showPagination = true,
  maxVisibleColumns = 6,
  defaultItemsPerPage = 5,
  selectable = false,
  onSelectionChange,
  styles = {},
  emptyMessage = 'No data available',
  loading = false,
  title,
  handleExport,
  showTitle = true,
  showAddRiderButton=false,
  handleRiderAddClick,
  handleDeleteAsignRider
}) => {
  const {
    filteredColumns,
    paginatedData,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
    handleColumnToggle,
    visibleColumns,
  } = useTableState({
    data,
    columns,
    maxVisibleColumns,
    defaultItemsPerPage,
    showPagination,
  });

  const {
    handleSelectAll,
    handleSelectRow,
    isSelected,
    isIndeterminate,
    isAllSelected,
  } = useTableSelection({ data, onSelectionChange });

  const {
    anchorEl,
    currentRowIndex,
    handleActionClick,
    handleActionClose,
  } = useTableActions();

  const {
    customizeAnchor,
    handleCustomizeClick,
    handleCustomizeClose,
  } = useColumnCustomization();

  return (
    <Box sx={{ width: '100%', ...styles.container }}>
      {/* Table Header */}
      <TableHeader
        title={title}
        showCustomizeButton={showCustomizeButton}
        onCustomizeClick={handleCustomizeClick}
        customizeButtonStyles={styles.customizeButton}
        handleExport={handleExport}
        showTitle={showTitle}
        showAddRiderButton={showAddRiderButton}
        handleRiderAddClick={handleRiderAddClick}
        handleDeleteAsignRider={handleDeleteAsignRider}
      />

      {/* Main Table */}
      <TableContainer component={Paper} sx={styles.table}>
        <Table stickyHeader>
          <TableHeaderRow
            selectable={selectable}
            isIndeterminate={isIndeterminate}
            isAllSelected={isAllSelected}
            onSelectAll={handleSelectAll}
            filteredColumns={filteredColumns}
            hasActions={actions.length > 0}
            hasDelete={deleteActions.length > 0}
            headerCellStyles={styles.headerCell}
          />

          <TableBodyBlock
            data={paginatedData}
            filteredColumns={filteredColumns}
            actions={actions}
            deleteActions={deleteActions} 
            selectable={selectable}
            isSelected={isSelected}
            onSelectRow={handleSelectRow}
            onActionClick={handleActionClick}
            loading={loading}
            emptyMessage={emptyMessage}
            bodyRowStyles={styles.bodyRow}
            bodyCellStyles={styles.bodyCell}
          />
        </Table>
      </TableContainer>

      {/* Pagination */}
      {showPagination && data.length > 4 && (
        <Box sx={{ mt: 3,mb: 3, ...styles.pagination }}>
          <CustomPagination
            itemsPerPage={itemsPerPage}
            handleItemsPerPageChange={handleItemsPerPageChange}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalItems={data.length}
            totalPages={totalPages}
          />
        </Box>
      )}

      {/* Actions Menu */}
      <ActionsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleActionClose}
        actions={actions}
        currentRow={paginatedData[currentRowIndex]}
        currentRowIndex={currentRowIndex}
      />

      {/* Column Customization Modal */}
      <ColumnCustomizationModal
        open={Boolean(customizeAnchor)}
        onClose={handleCustomizeClose}
        columns={columns}
        visibleColumns={visibleColumns}
        maxVisibleColumns={maxVisibleColumns}
        onColumnToggle={handleColumnToggle}
      />
    </Box>
  );
};

// Export all types and interfaces
export type { TableColumn, TableAction, TableStyles } from './common';

// Export individual components for advanced usage
export { StatusRenderer, VerificationRenderer, AvatarRenderer, DateRenderer, FilterHeaderDropdown } from './ui/components';