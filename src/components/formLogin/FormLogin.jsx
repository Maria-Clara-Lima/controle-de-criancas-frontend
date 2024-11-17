/* eslint-disable no-unused-vars */
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa"
import PasswordEye from "../../components/formLogin/PasswordEye.jsx"
import { Link } from "react-router-dom"


function FormLogin() {
  
  return (
    
    <div className="container">
      <form>  
        <h1>Administrador</h1>
        
        <div className="input-container">
          <input type="text" maxLength="25" placeholder="Insira o nome do usuário" required />
          <FaUser className='icone'/>
        </div>

        <div className="input-container-eye">
          <PasswordEye />
        </div>
        
        <Link to="/Dashboard">
        <button>Entrar</button>
        </Link>
        
        <p>Não tem uma conta? <Link to ="/Cadastro_user">Registre-se</Link></p>
      </form>
    </div>
  );
}



export default FormLogin;
