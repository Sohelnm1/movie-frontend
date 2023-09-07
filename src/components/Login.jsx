import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        login
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="text-white"> Login </h1>
        <div className="container d-flex flex-wrap justify-content-center align-items-center text-right">
          <label htmlFor="username" className="text-white">
            Enter Username
          </label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleOnChange}
            placeholder="email"
          ></input>
        </div>
        <div className="container d-flex flex-wrap justify-content-center align-items-center ">
          <label htmlFor="password" className="text-white text-right">
            Enter Password &nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleOnChange}
            placeholder="password"
          ></input>
        </div>
        <button type="submit" className="btn btn-secondary m-2">
          {" "}
          Submit{" "}
        </button>
      </form>
      <Link to="/signup"> Don't have login. SignUP </Link>
    </div>
  );
}

export default Login;
