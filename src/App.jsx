import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import './App.css'
import AdminProtal from './Components/Admin/AdminProtal'
import UsersProtal from './Components/Users/UsersProtal'
import PageNotFound from './Components/Pages/PageNotFound'
import UsersRegisterationForm from './Components/Admin/UsersRegisterationForm'
import RegisteredUsers from './Components/Admin/RegisteredUsers'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<AdminProtal />} path='/adminprotal/*'/>  
        <Route element={<UsersProtal/>} path='/usersprotal/*'/>
        <Route element={<UsersRegisterationForm/>} path='/portalregister'/>
        <Route element={<RegisteredUsers/>} path='/registeduser'/>
        <Route element={<PageNotFound/>} path='*'/>
        
      </Routes>
    </>
  )
}

export default App
