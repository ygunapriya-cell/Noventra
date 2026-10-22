import React from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <img src="../Image/logo.png" alt="no image" />
        </div>
        <div className="links">
            <ul>
                <li><NavLink to ="/adminprotal">Home</NavLink></li>
                <li><NavLink to = "/adminprotal/product">Product</NavLink></li>
                 <li><NavLink to="/adminprotal/addproduct">Add Product</NavLink></li>
                <li><NavLink to="/adminprotal/register">User register</NavLink></li>
                <li><a href="">items4</a></li>
                <li><a href="">items5</a></li>
                <li><a href="">items6</a></li>
                
            </ul>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
