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
          navigate('/list-marker'); // Reindirizza alla pagina dell'utente normale altrimenti
        }
      }
    } catch (error) {
      setError("Errore durante il login. Controlla le credenziali e riprova.");
    }
  };

return (
    <div>
      <>
  <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h2 fw-bold mb-0">Welcome back 👋</span>
                      </div>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Email address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        name='username'
                        value={data.username}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example37"
                        className="form-control form-control-lg"
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example27">
                        Password
                      </label>
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-light text-center text-lg-start">
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2019 - till date Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        desphixs.com
      </a>
    </div>
  </footer>
</>

    </div>
  )
}



export default LoginApp;