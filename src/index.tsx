import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./assets/styles/reset-css.css";
import "./assets/styles/variables.css";
import "./assets/styles/utility-classes.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
