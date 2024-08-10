// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import MyProvider from "./context/Context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MyProvider>
        <App />
      </MyProvider>
    </Router>
  </React.StrictMode>
);
