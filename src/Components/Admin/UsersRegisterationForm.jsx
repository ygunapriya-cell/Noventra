import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UsersRegisterationForm = () => {
 
  let [usersdata, setusersdata] = useState([]);
  let errmz = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  let bool1 = location.pathname.startsWith('/portalregister')
  
   // todo : API fetching  of users
  let fetchapi = async () => {
    let usersapi = await axios.get(`http://localhost:4000/users`);
    setusersdata(usersapi.data);
  };
  useEffect(() => {
    fetchapi();
  }, []);
  // console.log(usersdata)
  let allusersemail = usersdata.map((elem) => {
    return elem.email;
  });
  // console.log(allusersemail);
  // todo : collect  input value and update
  let [users, setusers] = useState({
    id: "",
    username: "",
    contact: "",
    email: "",
    Password: "",
    DOb: "",
    place: "",
  });
 
  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    console.log(key, val);
    setusers({
      ...users,
      [key]: val,
    });
  };

  let handlesubmit = async (e) => {
    e.preventDefault();

    try {
      let emailInput = users.email;
      let bool = allusersemail.includes(emailInput);
      if (bool) {
        let err = "email is already exist";
        toast.error(err);
        errmz.current.innerText = err;
        e.target[2].style.border = "solid 2px red";
      } else {
        alert("Welcome");
        errmz.current.innerText = "";
        e.target[2].style.border = "none";
        await axios.post("http://localhost:4000/users", users);
        toast.success(`Users is registered`);
        setusers({
          id: "",
          username: "",
          contact: "",
          email: "",
          Password: "",
          DOb: "",
          place: "",
        });      
          navigate(`/adminprotal/usersdetalies`)
      }
    } catch (error) {
      toast.error(`Users is not registered : ${error}`);
    }
  };
   
  return (
    <>
      <div className="regsiter">
       <div className="hesder">
         <h1>Registeration Form</h1>
         <button onClick={()=>{ bool1 ? navigate(`/registeduser`) : navigate(`/adminprotal/usersdetalies`)}}>
          Registered Users
           </button>
       </div>
        <div className="container">
          <form onSubmit={handlesubmit}>
            <label>
              <span>username :</span>
              <input
                type="text"
                onChange={handleInput}
                name="username"
                value={users.username}
                required
              />
            </label>

            <label>
              <span>Contact :</span>
              <input
                type="tel"
                onChange={handleInput}
                name="contact"
                value={users.contact}
                required
              />
            </label>

            <label>
              <span>Email :</span>
              <input
                type="email"
                onChange={handleInput}
                name="email"
                value={users.email}
                required
              />
            </label>
            <div ref={errmz} style={{ color: "red", textAlign: "right" }}></div>

            <label>
              <span>Password :</span>

              <input
                type="password"
                onChange={handleInput}
                name="Password"
                value={users.Password}
                required
              />
            </label>

            <label>
              <span>DOB :</span>
              <input
                type="date"
                onChange={handleInput}
                name="DOb"
                value={users.DOb}
                required
              />
            </label>

            <label>
              <span>Place :</span>
              <input
                type="place"
                onChange={handleInput}
                name="place"
                value={users.place}
                required
              />
            </label>
            <div className="btn">
              <button> Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UsersRegisterationForm;
