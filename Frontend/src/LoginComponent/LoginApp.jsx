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

  const [error, setError] = useState(""); // Stato per gestire il messaggio di errore

  const navigate = useNavigate(); // Otteniamo la funzione di navigazione

  const handleRegistrationClick = () => {
    // Reindirizzamento alla pagina di registrazione quando viene cliccato il pulsante
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
      } else {
        console.log("Login failed:", response.data.error);
      }
    } catch (error) {
      console.error('Error:', error.response);
      let errorMessage = "Errore durante il login. ";
      if (error.response && error.response.status === 400) {
        errorMessage += "Email o password non valide. Riprova.";
      } else {
        errorMessage += "Si è verificato un errore. Riprova più tardi.";
      }
      // Imposta il messaggio di errore
      setError(errorMessage);
    }
  };

  const routeChange = () => {
    navigate('/Registration'); // Naviga alla pagina di registrazione
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
        <button type="submit">Login</button>
        {error && <p style={{color: 'red'}}>{error}</p>} {/* Mostra il messaggio di errore se presente */}
        <div className="text-container">
            <p id="registration-text">Non sei registrato?</p>
            <button id="registration-button" onClick={routeChange}>Registrati</button>
        </div>
      </form>
    </div>
  );
};

export default LoginApp;
