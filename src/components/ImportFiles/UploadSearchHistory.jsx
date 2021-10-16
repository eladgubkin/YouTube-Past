import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { DataContext } from "../../Contexts/DataContext.js";
import { searchHistoryParse } from "../../utils/searchHistoryParse";
import _ from "lodash";

export const UploadSearchHistory = () => {
  const { setSearchHistoryData } = useContext(DataContext);

  const readFile = (file) => {
    if (!_.isEmpty(file)) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        setSearchHistoryData({
          fileName: file.name,
          fileSize: file.size,
          lastModifiedDate: file.lastModifiedDate,
          fileContent: searchHistoryParse(reader.result),
        });
      };
    } else {
      console.log("Choose only 1 file");
    }
  };
  return (
    <Dropzone onDrop={(file) => readFile(file[0])} maxFiles={1} accept=".json">
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
