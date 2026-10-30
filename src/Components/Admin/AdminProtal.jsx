import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Navbar from "../Navbar";
import ViewMore from "../Pages/ViewMore";
import AddProduct from '../Pages/AddProduct'
import UsersRegisterationForm from "./UsersRegisterationForm";
import RegisteredUsers from "./RegisteredUsers";
import PageNotFound from "../Pages/PageNotFound";

const AdminProtal = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/product" />
        <Route element={<ViewMore/>} path="/viewmore/:id"/>
       <Route element={<AddProduct/>} path="/addproduct"/>
       <Route element={<UsersRegisterationForm/>} path="/register"/>
       <Route element={<RegisteredUsers/>} path="/usersdetalies"/>

        <Route element={<PageNotFound/>} path='*'/>

      </Routes>
    </>
  )
}

export default AdminProtal;
