import React, { useState } from 'react';
import axios from 'axios';

const RegistrationApp = ({ handleBackToLoginClick }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/dj-rest-auth/registration/", {
        email: data.email,
        username: data.username,
        password1: data.password  // Assicurati di inviare correttamente i dati per la registrazione
      });
      if (response.status === 201) {
        console.log("Registration success!");
        // Puoi aggiungere una logica qui per gestire la registrazione riuscita, come navigare a una pagina di conferma registrazione
      } else {
        console.log("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error('Error:', error.response);
    }
  };

  return (
    <div>
      <h1>Registration Account</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
        <button onClick={handleBackToLoginClick}>Back to Login</button>
      </form>
    </div>
  );
};

export default RegistrationApp;
