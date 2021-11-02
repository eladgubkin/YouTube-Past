import React from "react";
import { ImportWatchHistory } from "../components/ImportWatchHistory";
import { ImportSearchHistory } from "../components/ImportSearchHistory";

export const Import = () => {
  return (
    <div>
      <h1>This is Import Window</h1>
      <ImportWatchHistory />
      <ImportSearchHistory />
    </div>
  );
};
