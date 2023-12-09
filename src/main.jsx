import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { OpenSettingProvider } from "./context/OpenSettingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OpenSettingProvider>
    <ThemeProvider>
      {/* <BrowserRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  </OpenSettingProvider>
);
