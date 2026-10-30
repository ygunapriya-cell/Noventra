import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import ViewMore from '../Pages/ViewMore'
import Navbar from '../Navbar'
import PageNotFound from '../Pages/PageNotFound'

const UsersProtal = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route element={<Home/>} path='/'/>
         <Route element={<Product />} path="/product" />
        <Route element={<ViewMore/>} path="/viewmore/:id"/>

         <Route element={<PageNotFound/>} path='*'/>

    </Routes>
       
   
      
    </>
  )
}

export default UsersProtal
