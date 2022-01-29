import React from "react"; // React
import ReactDropzone from "react-dropzone"; // React Dropzone

export const Dropzone = ({ title, desc, fileNeeded, fileParser, setState }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>

      <ReactDropzone onDrop={(file) => fileParser(file[0], setState)} maxFiles={1} accept=".json">
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <button>Upload File</button>
            </div>
          </section>
        )}
      </ReactDropzone>
    </div>
  );
};
