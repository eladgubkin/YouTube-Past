import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { DataContext } from "../Contexts/DataContext.js";
import { readFile } from "../utils/readFile";
import { watchHistoryParse } from "../utils/watchHistoryParse";

export const ImportWatchHistory = () => {
  const { setWatchHistoryData } = useContext(DataContext);

  return (
    <Dropzone
      onDrop={(file) => readFile(file[0], setWatchHistoryData, watchHistoryParse)}
      maxFiles={1}
      accept=".json"
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag Here watch-history.json</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
