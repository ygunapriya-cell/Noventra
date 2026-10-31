import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import './App.css'
import AdminProtal from './Components/Admin/AdminProtal'
import UsersProtal from './Components/Users/UsersProtal'
import PageNotFound from './Components/Pages/PageNotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<AdminProtal />} path='/adminprotal/*'/>  
        <Route element={<UsersProtal/>} path='/usersprotal/*'/>
        
        <Route element={<PageNotFound/>} path='*'/>
        
      </Routes>
    </>
  )
}

export default App
