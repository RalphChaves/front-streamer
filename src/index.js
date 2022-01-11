import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Filme from "./pages/Filme/Filme";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme" element={<Filme />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
