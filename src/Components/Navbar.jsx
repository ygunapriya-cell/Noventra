import React from 'react'
import '../App.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNavbar'
import UsersNavbar from './Users/UsersNavbar'


const Navbar = () => {
    // uselocation is hook which is present in react -router-dom ,It is used to target the location/path of the cpmonents & it return  location object
    const location = useLocation()
    let path = location.pathname
    let bool = path.startsWith("/adminprotal")
    

  return (
    <>
    <div className="navbar">
        <div className="logo">
            <img src="../Image/logo.png" alt="no image" />
        </div>
        <div className="links">
            { bool
             ? 
             <AdminNavbar/>
             : <UsersNavbar/>
            
            }
        </div>
    </div>
      
    </>
  )
}

export default Navbar
