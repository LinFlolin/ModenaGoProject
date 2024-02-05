import './LoginApp.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const LoginApp = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });

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
      const response = await axios.post("http://localhost:8000/dj-rest-auth/login/", {
        email: data.email,
        username: data.username,
        password: data.password
      });
      if (response.status === 200) {
        console.log("Login success!");
        // Azioni di successo, come la navigazione a una nuova pagina
      } else {
        console.log("Login failed:", response.data.error);
        // Gestione dell'errore lato client, ad esempio visualizzare un messaggio all'utente
      }
    } catch (error) {
      console.error('Error:', error.response);
      // Gestione dell'errore lato client, ad esempio visualizzare un messaggio all'utente
    }
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
        </label>
        <label htmlFor="password" id='loglabel'>
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" id='logbutton'>Login</button>
      </form>
    </div>
  );
};

export default LoginApp
