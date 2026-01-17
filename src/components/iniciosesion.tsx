import React from 'react';
import './iniciosesion.css';
import { Link } from 'react-router-dom';

const InicioSesion = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <Link to="/" className="back-button">
          <span className="material-icons-outlined">arrow_back</span>
        </Link>
        <span>DEVELOP SOFT INFO</span>
      </header>
      <main className="login-main">
        <div className="login-card">
          <h1>Inicio de Sesión</h1>
          <img src="https://i.ibb.co/sdjKc7Cf/usuario-Inactivo.jpg" alt="Usuario Inactivo" className="user-avatar" />
          <p>Accede a tu cuenta.</p>
          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
            Continuar con Google
          </button>
        </div>
      </main>
      <footer className="login-footer">
        <span>DEVELOP SOFT INFO</span>
        <button className="theme-toggle">
          <span className="material-icons-outlined">wb_sunny</span>
        </button>
      </footer>
    </div>
  );
};

export default InicioSesion;
