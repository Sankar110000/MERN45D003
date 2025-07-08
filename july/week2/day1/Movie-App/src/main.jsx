import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import AllRoutes from "./routes/AllRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
);
