// import './LoginApp.css'
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
    <div className='flex flex-col justify-center mt-20 p-4'>
      <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-5 shadow-lgs bg-indigo-500 rounded-xl'>
        <p className='box justify-center text-2xl font-semibold  '>
          Login Account
        </p>
        <label htmlFor="email" className=' te'>
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

        <button type='submit' className =' bg-primaria hover:bg-gradient-to-r from-primaria to-gradient2  h-10 text-base'>
          Login
        </button>
        <div className="flex flex-row">
            <p >Non sei registrato?</p>
            <button type='button' 
              className='bg-primaria max-w-19 m-3 '
              onClick={routeChange} >
              Registrati
            
            </button>
        </div>
        </form>

      </div>
   
     
    </div>
  );
};

export default LoginApp;
