import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TermProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <TermProvider>
      <App />
    </TermProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
