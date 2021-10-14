import React from "react";
import Dropzone from "react-dropzone-uploader";

const FileUpload = () => {
  const getUploadParams = () => {
    return { url: "http://localhost:5000/file/upload" };
  };

  const handleSubmit = (files, allFiles) => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((res) => console.log(res));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  );
};

export default FileUpload;
