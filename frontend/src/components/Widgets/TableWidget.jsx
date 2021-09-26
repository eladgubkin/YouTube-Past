import React from "react";
// import { DataGrid } from "@mui/x-data-grid";

const TableWidget = ({ data }) => {
  return (
    <>
      {/* <div style={{ height: 400, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              columns={[{ field: "video" }, { field: "channel" }, { field: "views" }, { field: "date" }]}
              rows={data.map((video) => {
                return {
                  video: video.title,
                  channel: video.channelName,
                  views: video.timesViewedVideo,
                  date: video.time,
                };
              })}
            />
          </div>
        </div>
      </div> */}

      <h1>Table</h1>
    </>
  );
};

export default TableWidget;
