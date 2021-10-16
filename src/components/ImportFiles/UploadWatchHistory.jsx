import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { DataContext } from "../../Contexts/DataContext.js";
import { watchHistoryParse } from "../../utils/watchHistoryParse";
import _ from "lodash";

export const UploadWatchHistory = () => {
  const { setWatchHistoryData } = useContext(DataContext);

  const readFile = (file) => {
    if (!_.isEmpty(file)) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        setWatchHistoryData({
          fileName: file.name,
          fileSize: file.size,
          lastModifiedDate: file.lastModifiedDate,
          fileContent: watchHistoryParse(reader.result),
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
            <p>Drag Here watch-history.json</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
