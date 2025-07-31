import { AppTable, formatDate, GridColSpec } from "@component-library"


export const TableTestData = () => {

  const financialColumns: GridColSpec<TableRow>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => formatDate(params.value),
    },
    {
      field: "deliveryID",
      headerName: "Delivery ID",
      flex: 1,
    },
    {
      field: "rider",
      headerName: "Rider",
      flex: 1,
    },
    {
      field: "totalCharge",
      headerName: "Total Charge",
      flex: 1,
    },
    {
      field: "platformFee",
      headerName: "Platform Fee",
      flex: 1
    },
    {
      field: "riderEarnings",
      headerName: "Rider Earnings",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ]

  const tableData = [
    {
      id: "1",
      date: "2023-10-01",
      deliveryID: "DEL12345",
      rider: "John Doe",
      totalCharge: "₦5000",
      platformFee: "₦500",
      riderEarnings: "₦4500",
      status: "Completed"
    },
    {
      id: "2",
      date: "2023-10-02",
      deliveryID: "DEL12346",
      rider: "Jane Smith",
      totalCharge: "₦6000",
      platformFee: "₦600",
      riderEarnings: "₦5400",
      status: "Completed"
    },
    // Add more rows as needed
  ]

  interface FetchDataResult {
    rows: TableRow[];
    totalRows: number;
  }

  interface TableRow {
    id: string;
    date: string;
    deliveryID: string;
    rider: string;
    totalCharge: string;
    platformFee: string;
    riderEarnings: string;
    status: string;
  }

  interface PaginationModel {
    page: number;
    pageSize: number;
  }

  const fetchData = async (page: number, pageSize: number): Promise<FetchDataResult> => {
    // Simulate fetching data from an API or database
    return {
      rows: tableData.slice(page * pageSize, (page + 1) * pageSize),
      totalRows: tableData.length,
    }
  }

  const paginationModel: PaginationModel = { page: 0, pageSize: 6 };
  const handlePageChange = (newPage: number) => {
    paginationModel.page = newPage;
    fetchData(newPage, paginationModel.pageSize).then(data => {
      // Update the table data with the fetched data
      console.log(data.rows);
    });
  }
  const handleItemsPerPageChange = (newPageSize: number) => {
    paginationModel.pageSize = newPageSize;
  }

  const handleRowSelection = (selectedRows: TableRow[]) => {
    console.log("Selected rows:", selectedRows);
  }
  const setPaginationModel = (model: PaginationModel) => {
    paginationModel.page = model.page;
    paginationModel.pageSize = model.pageSize;
    fetchData(model.page, model.pageSize).then(data => {
      // Update the table data with the fetched data
      console.log(data.rows);
    });
  }

  const currentPage = 1;
  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / paginationModel.pageSize);

  return (
    <AppTable
      columns={financialColumns}
      fetchData={fetchData}
      selectable={true}
      showPagination={true}
      initialPageSize={6}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      itemsPerPage={paginationModel.pageSize}
      handleItemsPerPageChange={handleItemsPerPageChange}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      totalItems={totalItems}
      totalPages={totalPages}
      onSelectionChange={handleRowSelection}
    />
  )
}