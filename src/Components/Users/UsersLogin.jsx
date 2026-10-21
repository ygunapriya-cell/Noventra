import React from "react";

const UsersLogin = () => {
  return (
    <>
      <div className="users-login">
        <form>
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password" />

          <button>Users Login</button>
        </form>
      </div>
    </>
  );
};

export default UsersLogin;
