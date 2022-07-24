import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperiance from "./components/WorkExperiance";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
