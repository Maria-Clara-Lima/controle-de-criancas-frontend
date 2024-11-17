/* eslint-disable no-unused-vars */
import React from 'react';
import './formCadastroUser.css'; 
import { FaUser } from "react-icons/fa"
import PasswordEye from "../../components/formLogin/PasswordEye.jsx"
import PasswordEyeConfirm from "../../components/formCadastroUser/PasswordEyeConfirm.jsx"
import { Link } from "react-router-dom"


function FormLogin() {
  
  return (
    
    <div className='principal'>
      <div className="icon-image"></div>
      <div className="container">
        <form>  
          <h1>Registre-se</h1>
          
          <div className="input-container">
            <input type="text" maxLength="25" placeholder="Insira o nome do usuário" required />
            <FaUser className='icone'/>
          </div>

          <div className="input-container-eye">
            <PasswordEye />
          </div>
          <div className="input-container-eye">
            <PasswordEyeConfirm />
          </div>
          
          <Link to="/Dashboard">
          <button>Entrar</button>
          </Link>
          
          <p>Já é registrado? <Link to ="/">Faça login</Link></p>
        </form>
      </div>
    </div>
    
  );
}



export default FormLogin;
