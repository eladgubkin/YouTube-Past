import React from "react"; // React
import ReactDOM from "react-dom"; // React
import { RecoilRoot } from "recoil"; // Recoil
import { App } from "./App"; // Component

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
