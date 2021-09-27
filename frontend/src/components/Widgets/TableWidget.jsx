import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Title", width: 200 },
  { field: "channelName", headerName: "Channel", width: 200 },
  { field: "time", headerName: "Time", width: 200 },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${params.getValue(params.id, "lastName") || ""}`,
  // },
];

const rows = [
  { id: 1, channelName: "Snow", time: "Jon" },
  { id: 2, channelName: "Lannister", time: "Cersei" },
  { id: 3, channelName: "Lannister", time: "Jaime" },
  { id: 4, channelName: "Stark", time: "Arya" },
  { id: 5, channelName: "Targaryen", time: "Daenerys" },
  { id: 6, channelName: "Melisandre", time: "Ok" },
  { id: 7, channelName: "Clifford", time: "Ferrara" },
  { id: 8, channelName: "Frances", time: "Rossini" },
  { id: 9, channelName: "Roxie", time: "Harvey" },
];

export default function DataTable() {
  return (
    <div style={{ width: "100%", height: 400, background: "#1B2845", marginTop: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{ border: 0 }}
      />
    </div>
  );
}
