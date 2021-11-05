import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { FilesContext } from "../../Contexts/FilesContext";
import { parseWatchHistoryFile } from "../../utils/files/parseWatchHistoryFile";

export const WatchHistoryDropzone = () => {
  const { setWatchHistoryData } = useContext(FilesContext);

  return (
    <Dropzone
      onDrop={(file) => parseWatchHistoryFile(file[0], setWatchHistoryData)}
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
