/* eslint-disable no-unused-vars */
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa";
import PasswordEye from "../../components/formLogin/PasswordEye.jsx"

function FormLogin() {
  
  return (
    <div className="container">
      <form>  
        <h1>Administrador</h1>
        
        <div className="input-container">
          <input type="text" placeholder="Insira o nome do usuário" required />
          <FaUser className='icone'/>
        </div>

        <div className="input-container-eye">
          <PasswordEye />
        </div>
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default FormLogin;
