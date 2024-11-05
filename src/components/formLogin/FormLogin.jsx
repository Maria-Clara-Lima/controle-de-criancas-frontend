// FormLogin.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa";

function FormLogin() {
  return (
    <div className="container">
      <form>  
        <h1>Administrador</h1>
        <input type="text" placeholder="Insira o nome do usuário" required />
        <FaUser />

        <input type="password" placeholder="Senha" required />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default FormLogin;
