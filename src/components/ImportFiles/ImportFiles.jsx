import React from "react";
import { UploadWatchHistory } from "./UploadWatchHistory";
import { UploadSearchHistory } from "./UploadSearchHistory";

export const ImportFiles = () => {
  return (
    <>
      <h1>Import Files</h1>
      <UploadWatchHistory />
      <UploadSearchHistory />
    </>
  );
};
