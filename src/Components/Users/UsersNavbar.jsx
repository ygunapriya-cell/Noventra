import React from 'react'
import { NavLink } from 'react-router-dom'

const UsersNavbar = () => {
  return (
    <>
    <ul>
                <li><NavLink to ="/adminprotal">Home</NavLink></li>
                <li><NavLink to = "/adminprotal/product">Product</NavLink></li>
                 <li><NavLink to="/adminprotal/addproduct">Add Product</NavLink></li>
                <li><NavLink to="/adminprotal/register">User register</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
      
    </>
  )
}

export default UsersNavbar
