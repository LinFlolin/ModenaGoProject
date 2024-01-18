import React,{useState} from 'react'

export const LogIn= () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effettua qui la tua logica di gestione del login
    // Potresti chiamare una funzione che interagisce con il tuo backend per l'autenticazione.

    console.log('Dati di accesso:', formData);

    // Resetta i campi del modulo dopo la sottomissione
    setFormData({ username: '', password: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome utente:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Accedi</button>
    </form>
  );
  
}
