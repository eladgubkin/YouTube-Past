import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { FilesContext } from "../../Contexts/FilesContext";
import { parseSearchHistoryFile } from "../../utils/files/parseSearchHistoryFile";

export const SearchHistoryDropzone = () => {
  const { setSearchHistoryData } = useContext(FilesContext);

  return (
    <Dropzone
      onDrop={(file) => parseSearchHistoryFile(file[0], setSearchHistoryData)}
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
