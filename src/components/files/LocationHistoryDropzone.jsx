import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { FilesContext } from "../../Contexts/FilesContext";
import { parseLocationHistoryFile } from "../../utils/files/parseLocationHistoryFile";

export const LocationHistoryDropzone = () => {
  const { setLocationHistoryData } = useContext(FilesContext);

  return (
    <Dropzone
      onDrop={(file) => parseLocationHistoryFile(file[0], setLocationHistoryData)}
      maxFiles={1}
      accept=".json"
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag Here location-history.json</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
