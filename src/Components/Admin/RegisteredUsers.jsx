import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RegisteredUsers = () => {
  let [usersdata, setusersdata] = useState([]);
  let fetchapi = async () => {
    try {
      let resp = await axios.get(`http://localhost:4000/users`);
      setusersdata(resp.data);
    } catch (error) {
      toast.error("failed to fetch : ${error}");
    }
  };
  useEffect(() => {
    fetchapi();
  }, []);
  // console.log(usersdata)
  let handleDelete = async (id, name) => {
    try {
      let bool = window.confirm("Do Ypu Want to delete this user detailes");
      if (bool) {
        await axios.delete(`http://localhost:4000/users/${id}`);
        toast.success(`${name} Data is deleted`);
        setTimeout(() => {
          fetchapi();
        }, 2000);
      } else {
        toast.warn("User Details is Not Deleted");
      }
    } catch (error) {
      toast.error(`User Details is Not Deleted : ${error}`);
    }
  };
  return (
    <>
      <div className="registered-users">
        <div className="container">
          <table border={1} rules="ALL">
            <thead>
              <tr>
                <th>Slno</th>
                <th>User Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date of Brith</th>
                <th>Age</th>
                <th>Place</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {usersdata.map((elem, index) => {
                let { id, username, contact, email, Password, DOb, place } =
                  elem;

                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{username}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                    <td onClick={() => alert(`password : ${Password}`)}>
                      <b>******</b>
                    </td>
                    <td>{DOb}</td>
                    <td>{new Date().getFullYear() - DOb.slice(0, 4)}</td>
                    <td>{place}</td>
                    <td>
                      <button onClick={() => handleDelete(id, username)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RegisteredUsers;
