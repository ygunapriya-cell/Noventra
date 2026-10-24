import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UsersRegisterationForm = () => {
  // todo : API fetching  of users
  let [usersdata, setusersdata] = useState([]);
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
  console.log(allusersemail);
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
    // console.log(key,val);
    setusers({
      ...users,
      [key]: val,
    });
  };

  let handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(users)
    try {
      await axios.post("http://localhost:4000/users", users);
      toast.success(`Users is registered`);
    } catch (error) {
      toast.error(`Users is not registered : ${error}`);
    }
  };
  return (
    <>
      <div className="regsiter">
        <h1>Registeration Form</h1>
        <div className="container">
          <form onSubmit={handlesubmit}>
            <label>
              username :
              <input
                type="text"
                onChange={handleInput}
                name="username"
                value={users.username}
                required
              />
            </label>

            <label>
              Contact :
              <input
                type="tel"
                onChange={handleInput}
                name="contact"
                value={users.contact}
                required
              />
            </label>

            <label>
              Email :
              <input
                type="email"
                onChange={handleInput}
                name="email"
                value={users.email}
                required
              />
            </label>

            <label>
              Password :
              <input
                type="password"
                onChange={handleInput}
                name="Password"
                value={users.Password}
                required
              />
            </label>

            <label>
              DOb :
              <input
                type="date"
                onChange={handleInput}
                name="DOb"
                value={users.DOb}
                required
              />
            </label>

            <label>
              Place :
              <input
                type="place"
                onChange={handleInput}
                name="place"
                value={users.place}
                required
              />
            </label>
            <button> Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UsersRegisterationForm;
