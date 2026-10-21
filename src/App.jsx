import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import './App.css'
import AdminProtal from './Components/Admin/AdminProtal'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<AdminProtal />} path='adminprotal/*'/>  
        
      </Routes>
    </>
  )
}

export default App
