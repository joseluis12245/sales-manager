import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export interface salesInformation {
  id: number
  brand: string
  model: string
  quantity: number
  color: string
  sold: number
  earning: number
}

interface DataGridProps {
  columns: GridColDef[];
  data: salesInformation[];
}

const TableContent: React.FC<DataGridProps> = (props: DataGridProps) => {
  const { columns, data } = props;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            pageSize: 6,
          },
        }}
        checkboxSelection
      />
    </Box>
  );
};

export default TableContent;
