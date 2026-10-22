import React from "react";

const UsersRegisterationForm = () => {
  return (
    <>
      <div className="regsiter">
        <h1>Registeration Form</h1>
        <div className="container">
          <form>
            <lable>
              Username :
              <input type="text" />
            </lable> 

            <lable>
              Contact :
              <input type="tel" />
            </lable>

            <lable>
              Email :
              <input type="email" />
            </lable>

            <lable>
              Password :
              <input type="password" />
            </lable>

            <lable>
              DOb :
              <input type="text" />
            </lable>

            <lable>
              Place :
              <input type="place" />
            </lable>
          </form>
        </div>
      </div>
    </>
  );
};

export default UsersRegisterationForm;
