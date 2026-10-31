import React from "react";
import { NavLink } from "react-router-dom";

const UsersNavbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/usersprotal">Home</NavLink>
        </li>
        <li>
          <NavLink to="/usersprotal/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/usersprotal/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </>
  );
};

export default UsersNavbar;
