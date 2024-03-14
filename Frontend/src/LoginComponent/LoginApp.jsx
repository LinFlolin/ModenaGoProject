import './LoginApp.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginApp = () => {

  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
        const response = await axios.post("http://localhost:8000/api/dj-rest-auth/login/", {
          email: data.email,
          username: data.username,
          password: data.password
        });
        if (response.status === 200) {
          console.log("Login success!");
          setUsernameError("");
          setPasswordError("");
        } else {
          console.log("Login failed:");
          // Handle other status codes as needed
        }
     } catch (error) {
        if (error.response && error.response.status === 400) {
          // Assuming the server sends back a JSON object with an 'err' field
          const errorMessage = error.response.data.err || 'An error occurred.';
            if (errorMessage.includes("username")) {
                setUsernameError("Username errato");
                setPasswordError("");
            } else if (errorMessage.includes("password")) {
                setPasswordError("Password errata");
                setUsernameError("");
            } else {
            // Handle other types of errors or set a generic error message
                setUsernameError("Errore di Username");
                setPasswordError("Errore di Password");
            }
        } else {
          console.error("An unknown error occurred:", error);
        }
     }
  };

  const routeChange = () => {
    navigate('/Registration');
  };

  return (
    <div className='section'>
      <h1 id='logh1'>Login Account</h1>
      <form onSubmit={handleSubmit} className='logform'>
        <label htmlFor="email" id='loglabel'>
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="username" id='loglabel'>
          Username
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </label>

        <label htmlFor="password" id='loglabel'>
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </label>

        <button type="submit">Login</button>

        <div className="text-container">
          <p id="registration-text">Non sei registrato?</p>
          <button id="registration-button" onClick={routeChange}>Registrati</button>
        </div>
      </form>
    </div>
  );
};

export default LoginApp;
