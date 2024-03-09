import './RegistrationApp.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const RegistrationApp = () => {

    const [userData, setUserData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const navigate = useNavigate(); // Otteniamo la funzione di navigazione


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // Convert percorsoData to JSON string
        const userDataJson = JSON.stringify(userData);

        console.log('JSON to be sent:', userDataJson); //MANNAGGIA A CHI SO IO

        // Make the API call with the JSON string
        const response = await axios.post('http://127.0.0.1:8000/api/dj-rest-auth/registration/', userDataJson, {
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
            },
        });

        console.log('Registrazione avvenuta con successo', response.data);
        // Handle successful registration, e.g., redirect or show success message
    } catch (error) {
        console.error("Errore durante la registrazione", error);
    }
};

  const routeChange = () => {
    navigate('/login'); // Naviga alla pagina di registrazione
  };


  return (
    <div>
      <h1>Registrati</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password1">
          Password
          <input
            type="password"
            name="password1"
            value={userData.password1}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            name="password2"
            value={userData.password2}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registrati</button>
        <div className="text-container">
            <p id="login-text">Sei già registrato?</p>
            <button id="login-button" onClick={routeChange}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationApp;