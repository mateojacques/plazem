import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "material-symbols";
import TableProvider from "./contexts/tableContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TableProvider>
      <App />
    </TableProvider>
  </React.StrictMode>
);
