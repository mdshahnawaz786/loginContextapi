import React, { useContext, useState } from "react";
import "./login.css";
import { myContext } from "./ContextApi";

const Login = () => {
    const {setInput} = useContext(myContext)
  const { setisLoggedIn } = useContext(myContext);
  console.log(setisLoggedIn);
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  return (
    <div className="login">
      <h3>Login Form</h3>
      <div>
        <label>Username: </label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setState({
              ...state,
              name: e.target.value,
            });
            setInput(e.target.value)
          }}
        />
      </div>
      <div>
      <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setState({
              ...state,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            if (
              (state.name === "Shahnawaz" &&
                state.password === "Shahnawaz@123") ||
              (state.name === "admin" && state.password === "admin@123")
            ) {
              setisLoggedIn(true);
            } else {
              alert("Enter proper credentials");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
