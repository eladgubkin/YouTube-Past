import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";

const FileUpload = ({ data, setData }) => {
  const handleChangeStatus = ({ meta, file }, status) => {};

  const handleSubmit = (allFiles) => {
    for (const file of allFiles.map((f) => f.file)) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        setData((oldData) => [
          ...oldData,
          {
            fileName: file.name,
            fileSize: file.size,
            lastModifiedDate: file.lastModifiedDate,
            fileContent: JSON.parse(e.target.result),
          },
        ]);
      };
    }

    allFiles.forEach((f) => f.remove());
  };

  return (
    <>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        maxFiles={2}
        inputContent="Drop 2 Files"
        inputWithFilesContent={(files) => `${2 - files.length} more`}
        submitButtonDisabled={(files) => files.length < 2}
        accept=".json"
      />
    </>
  );
};

export default FileUpload;
