import React from "react"; // React
import ReactDOM from "react-dom"; // React
import { RecoilRoot } from "recoil"; // Recoil
import { App } from "./App"; // Component
import { QueryClient, QueryClientProvider } from "react-query"; // React Query
import "tailwindcss/tailwind.css"; // TailwindCSS

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
