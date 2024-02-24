import './RegistrationApp.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegistrationApp = () => {

    const [userData, setUserData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const navigate = useNavigate(); // Otteniamo la funzione di navigazione

  const handleLoginClick = () => {
    // Reindirizzamento alla pagina di login quando viene cliccato il pulsante
    navigate('/login');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Effettua la chiamata API per la registrazione
      const response = await axios.post('http://localhost:8000/api/dj-rest-auth/registration/', userData);
      console.log('Registrazione avvenuta con successo', response.data);
      // Effettua il reindirizzamento o mostra un messaggio di successo
    } catch (error) {
      console.error('Errore durante la registrazione', error);
      // Gestisci gli errori, ad esempio mostrando un messaggio di errore all'utente
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
