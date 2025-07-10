import {
  DataGrid as MuiDataGrid,
  DataGridProps,
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridSortDirection,
  MuiEvent,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { pxToRem } from "../../common";
import { CustomPagination } from '../CustomPagination';
import { DataGridLoader, TableHeader } from './ui/components';
import { StatusRenderer, FilterHeaderDropdown, StatusType } from "./ui/components";
import { colorMap } from "../../common";

export type GridRow = { id: string | number };

export type GridColSpec<T extends GridRow> = Omit<
  GridColDef<T>,
  "field" | "headerName"
> & {
  field: Extract<keyof T, string> | string;
  headerName: string;
};

export type GridSortSpec<T extends GridRow> = {
  field: Extract<keyof T, string> | string;
  sort: GridSortDirection;
};

export type GridDataFetchResult<T extends GridRow> = {
  rows: T[];
  totalRows: number;
};

export type GridDataFetcher<T extends GridRow> = (
  page: number,
  pageSize: number,
  sortModel: GridSortSpec<T>[]
) => Promise<GridDataFetchResult<T>>;

// Custom NoRowsOverlay component
const CustomNoRowsOverlay = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: 200,
        textAlign: 'center',
        py: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 400,
          color: '#797979',
          lineHeight: '140%',
        }}
      >
        No information available
      </Typography>
      <Typography
        sx={{
          fontSize: pxToRem(14),
          fontWeight: 400,
          color: '#B0B0B0',
          lineHeight: '140%',
          mt: 1,
        }}
      >
        Information will be shown here once available
      </Typography>
    </Box>
  );
};

export interface AppTableProps<T extends GridRow> extends Omit<
  DataGridProps,
  | "columns"
  | "rows"
  | "onRowClick"
  | "paginationModel"
  | "onPaginationModelChange"
  | "rowCount"
  | "paginationMode"
  | "hideFooter"
  | "checkboxSelection"
> {
  columns: GridColSpec<T>[];
  fetchData: GridDataFetcher<T>;
  selectable?: boolean;
  showPagination?: boolean;
  initialPageSize?: number;
  onSelectionChange?: (selectedRows: T[]) => void;
  onRowClick?: (
    row: T,
    event: MuiEvent<MouseEvent>,
    details: GridCallbackDetails
  ) => void;
  disableRowClick?: boolean;
  emptyMessage?: string;
  title?: string;
  handleExport?: () => void;
  showTitle?: boolean;
  showAddRiderButton?: boolean;
  handleRiderAddClick?: () => void;
  handleDeleteAsignRider?: (data: number) => void;
  showCustomizeButton?: boolean;
  disabledCustomisedButton?: boolean
  onCustomizeClick?: () => void;
  pageSizeOptions?: number[];
  slots?: DataGridProps['slots'];

  // Custom pagination props - passed from parent
  paginationModel?: GridPaginationModel;
  onPaginationModelChange?: (model: GridPaginationModel) => void;
  itemsPerPage?: number;
  handleItemsPerPageChange?: (itemsPerPage: number) => void;
  currentPage?: number;
  handlePageChange?: (page: number) => void;
  totalItems?: number;
  totalPages?: number;
  sx?: SxProps<Theme>;
}

export const AppTable = <T extends GridRow>({
  columns,
  fetchData,
  selectable = false,
  showPagination = true,
  initialPageSize = 10,
  onSelectionChange,
  onRowClick,
  disableRowClick = false,
  title,
  handleExport,
  showTitle = true,
  showAddRiderButton = false,
  handleRiderAddClick,
  handleDeleteAsignRider,
  showCustomizeButton = false,
  onCustomizeClick,
  disabledCustomisedButton = false,
  pageSizeOptions = [5, 10, 15, 25, 50, 100],
  sx = {},
  slots,
  // Custom pagination props
  paginationModel: paginationModelProp,
  onPaginationModelChange: onPaginationModelChangeProp,
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  handlePageChange,
  totalItems,
  totalPages,
  ...moreGridProps
}: AppTableProps<T>) => {
  const [rows, setRows] = useState<T[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [internalPaginationModel, setInternalPaginationModel] =
    useState<GridPaginationModel>({
      pageSize: initialPageSize,
      page: 0,
    });

  const paginationModel = paginationModelProp ?? internalPaginationModel;
  const onPaginationModelChange =
    onPaginationModelChangeProp ?? setInternalPaginationModel;

  // Selection state
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortModel, _setSortModel] = useState<GridSortSpec<T>[]>([]);

  // Handle row click
  const rowClickHandler: DataGridProps["onRowClick"] = (
    params,
    event,
    details
  ) => {
    if (disableRowClick || !onRowClick) return;
    onRowClick(params.row, event, details);
  };

  const handleRowClick = useCallback(rowClickHandler, [onRowClick, disableRowClick]);

  // Handle selection change
  const handleSelectionChange = useCallback((newSelection: GridRowSelectionModel) => {
    setSelectionModel(newSelection);
    if (onSelectionChange) {
      const selectedRows = rows.filter(row => newSelection.includes(row.id));
      onSelectionChange(selectedRows);
    }
  }, [rows, onSelectionChange]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { page, pageSize } = paginationModel;
      const data = await fetchData(page, pageSize, sortModel);
      setRows(data.rows);
      setRowCount(data.totalRows);
      setLoading(false);
    };
    loadData();
  }, [paginationModel, sortModel, fetchData]);

  return (
    <Box sx={{ width: '100%', overflow: "hidden" }}>
      <TableHeader
        title={title}
        showCustomizeButton={showCustomizeButton}
        onCustomizeClick={onCustomizeClick ?? (() => {})}
        handleExport={handleExport}
        showTitle={showTitle}
        showAddRiderButton={showAddRiderButton}
        handleRiderAddClick={handleRiderAddClick}
        handleDeleteAsignRider={handleDeleteAsignRider}
        disabledCustomisedButton={disabledCustomisedButton}
      />

      <Box sx={{
        border: "1px solid #D6D4D1",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <MuiDataGrid<T>
          columns={columns}
          rows={rows}
          rowCount={rowCount}
          loading={loading}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={onPaginationModelChange}
          hideFooter
          hideFooterSelectedRowCount
          hideFooterPagination
          checkboxSelection={selectable}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={handleSelectionChange}
          pageSizeOptions={pageSizeOptions}
          disableRowSelectionOnClick={true}
          rowHeight={68}
          onRowClick={handleRowClick}
          slots={{
            loadingOverlay: DataGridLoader,
            noRowsOverlay: CustomNoRowsOverlay,
            ...slots,
          }}
          sx={{
            "&, [class^=MuiDataGrid]": {
              border: "none",
              backgroundColor: "inherit",
            },
            "& .MuiDataGrid-root": {
              borderRadius: "10px",
              boxShadow: "none",
            },
            "& .MuiDataGrid-container--top [role=row]": {
              borderRadius: "4px"
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#E2E2E2",
              borderBottom: "none !important",
              height: "68px !important",
              minHeight: "68px !important",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 500,
              fontSize: pxToRem(16),
              lineHeight: "24px",
              fontStyle: 'normal'
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "transparent",
              borderRadius: "4px",
              boxShadow: "none",
              transition: "all 0.4s ease",
              cursor: disableRowClick ? "default" : "pointer",
              "&:hover": {
                backgroundColor: "#E2E2E2",
              },
              "&:active": {
                backgroundColor: "transparent"
              }
            },
            "& .MuiDataGrid-cell": {
              fontWeight: 400,
              fontSize: pxToRem(16),
              lineHeight: "140%",
              fontStyle: 'normal',
              display: "flex",
              alignItems: "center",
            },
            "& .MuiCheckbox-root": {
              color: "#D6D4D1",
              "&.Mui-checked": {
                color: "#F98D31",
              },
            },
            // Hide any footer elements that might show row count
            "& .MuiDataGrid-footerContainer": {
              display: "none !important",
            },
            "& .MuiDataGrid-selectedRowCount": {
              display: "none !important",
            },
            // Hide any overlay text/numbers that might appear
            "& .MuiDataGrid-overlay": {
              backgroundColor: "transparent",
            },
            ...sx,
          }}
          {...moreGridProps}
        />
      </Box>

      {/* Custom Pagination - Only show if props are provided */}
      {showPagination && itemsPerPage && handleItemsPerPageChange && currentPage && handlePageChange && totalItems && totalPages && (
        <Box sx={{ mt: 3, mb: 3 }}>
          <CustomPagination
            itemsPerPage={itemsPerPage}
            handleItemsPerPageChange={handleItemsPerPageChange}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalItems={totalItems}
            totalPages={totalPages}
          />
        </Box>
      )}
    </Box>
  );
};

export { StatusRenderer, FilterHeaderDropdown, colorMap };
export type { StatusType };