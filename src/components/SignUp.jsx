import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
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
        "http://127.0.0.1:8000/api/userpost",
        login
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1> SignUp </h1>
      <div className="container">
        <label htmlFor="username" className="text-white">
          Enter Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleOnChange}
          placeholder="username"
        ></input>
      </div>
      <div className="container">
        <label htmlFor="email" className="text-white">
          Enter Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleOnChange}
          placeholder="email"
        ></input>
      </div>
      <div className="container">
        <label htmlFor="password" className="text-white">
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
  );
}

export default SignUp;
