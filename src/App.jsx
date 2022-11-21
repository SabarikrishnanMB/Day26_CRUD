import React from "react";
import "./css/sb-admin-2.css";
import "./App.css";
import Dashboard from "./Dashboard";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Products from "./Products";
import CreateUser from "./CreateUser";
import Login from "./Login";
import Portal from "./Portal";
import CreateProduct, { ProductCard } from "./CreateProduct";
import UsersView from "./UsersView";
import EditUser from "./EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userid" element={<UsersView />} />
          <Route path="users/edit/:userid" element={<EditUser />} />
          <Route path="products" element={<Products />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="createproduct" element={<CreateProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
