import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { DataContext } from "../Contexts/DataContext.js";
import { readFile } from "../utils/readFile";
import { searchHistoryParse } from "../utils/searchHistoryParse";

export const ImportSearchHistory = () => {
  const { setSearchHistoryData } = useContext(DataContext);

  return (
    <Dropzone
      onDrop={(file) => readFile(file[0], setSearchHistoryData, searchHistoryParse)}
      maxFiles={1}
      accept=".json"
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag Here search-history.json</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
