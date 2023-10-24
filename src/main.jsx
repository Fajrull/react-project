import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductsPage from "./pages/products";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Link to="/">Home</Link> <br />
      <Link to="/*">404</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/register">Register</Link> <br /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
