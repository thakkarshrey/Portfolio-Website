import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
