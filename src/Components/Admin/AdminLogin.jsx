import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
 let navigate= useNavigate() // it is working link
  let [formdata, setFormdata] = useState({ email: "", password: "" });
  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    // console.log(key,val)
    setFormdata({
      ...formdata,
      [key]: val,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let errBorder = `boeder : solid 2px red; color : red ; background : white`;
    let successBorder = `boeder : solid 2px green; color : green ; background : white`;
    let { email, password } = formdata;

    let creadentials = {
      adminEmail: "Guna@gmail.com",
      adminpswd: "Guna@123",
    };
    let { adminEmail, adminpswd } = creadentials;
    if (email === adminEmail) {
      if (password === adminpswd) {
        e.target[0].style.cssText = successBorder;
        toast.success("Login success");
        navigate('/adminprotal')
      } else {
        e.target[1].style.cssText = successBorder;
        toast.error("Password is Invalid");
      }
      e.target[1].style.cssText = errBorder;
    } else {
      e.target[0].style.cssText = errBorder;
      toast.error("Email is Invalid");
    }
  };
  return (
    <>
      <div className="admin-login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email Address"
            onChange={handleInput}
            name="email"
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={handleInput}
            name="password"
          />

          <button>Admin Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
