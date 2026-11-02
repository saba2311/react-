import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import App from "./App.jsx";
// import "./styles/assignment.css";
// // import "./styles/layout.css";
// import "./styles/bootstrap-components.css";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);