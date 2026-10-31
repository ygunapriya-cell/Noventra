import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UsersLogin = () => {
  let navigate = useNavigate()
  // todo : fetch user 
  let [userdata,setuserdata] =useState([])
  let fetchapi = async () =>{
    try {
      let resp = await axios.get(`http://localhost:4000/users`)
      setuserdata(resp.data)
    } catch (error) {
      toast.error("failed to fetch : ${error}")
    }
  }
  useEffect(()=>{
    fetchapi()
  },[])

  // todo : collect all email address from the users api
  let allusersemail = userdata.map(elem=>elem.email)
  // console.log(allusersemail)
  
let [formData,setformData] = useState({emailfield : "",passwordfield:""})

  let handleInput =(e)=>{
    let key  = e.target.name
    let val = e.target.value
    
    setformData({
      ...formData,
      [key] : val
    })
   }

   let handleSubmit = (e) =>{
    e.preventDefault()
    let {emailfield,passwordfield} = formData

    let emailIndex = allusersemail.indexOf(emailfield)
    let successBoarder = 'solid 2px green'
    let errorBoarder = 'solid 2px red'
    if(emailIndex !== -1){
      let userPassword = userdata[emailIndex].Password
      if(passwordfield === userPassword){
        toast.success("Welcome")
         e.target[1].style.border =successBoarder
         navigate('/usersprotal')
      }else{
        toast.error("Password is Invaild")
        console.log(passwordfield , userPassword);
        
         e.target[1].style.border =errorBoarder
      }
    }else{
      toast.error("Email is Invalid")
      e.target[0].style.border =errorBoarder
    }
  }
    
  
  return (
    <>
      <div className="users-login">
        <form onSubmit={handleSubmit}>
          <input
           type="email" 
           placeholder="Enter Email Address" 
           onChange={handleInput}
           name='emailfield'
           value={formData.emailfield}
           required
           />
          <input 
          type="password" 
          placeholder="Enter Password"
          name='passwordfield'
          onChange={handleInput}
          value={formData.passwordfield}
          required
           />

          <button>Users Login</button>
        </form>
      </div>
    </>
  );
};

export default UsersLogin;
