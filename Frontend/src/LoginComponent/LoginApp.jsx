import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginApp = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };


  // let token = response.data.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/dj-rest-auth/login/", data);
      if (response.status === 200) {
        const token = response.data.token;
        console.log("data: ", response.data);

        // Controlla il ruolo dell'utente e reindirizza di conseguenza
        if (response.data.is_staff) {
          navigate('/admin'); // Reindirizza alla pagina dell'amministratore se è un amministratore
        } else {
          navigate('/Marker'); // Reindirizza alla pagina dell'utente normale altrimenti
        }
      }
    } catch (error) {
      setError("Errore durante il login. Controlla le credenziali e riprova.");
    }
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
          <button type='submit' className =' bg-primaria hover:bg-gradient-to-r from-primaria to-gradient2  h-10 text-base'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginApp;