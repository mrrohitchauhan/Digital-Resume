import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProjectDetails from "./Components/ProjectDetails";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/details/:id" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
