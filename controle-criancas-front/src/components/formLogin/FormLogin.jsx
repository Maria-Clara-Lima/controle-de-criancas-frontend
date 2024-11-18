/* eslint-disable no-unused-vars */
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa"
import PasswordEye from "../../components/formLogin/PasswordEye.jsx"
import { Link } from "react-router-dom"


function FormLogin() {
  
  return (
    
    <div className='principal'>
        <img src="/src/assets/images/ELEMENTOS-2 FLOR DE CANTO AMARELA.png" alt="folha-amarela-de-canto" id='folha-amarela' />
        <img src="/src/assets/images/ELEMENTOS-6 PÓLEM.png" alt="polen" id='polen'/>
      <div className="icon-image">
        <img src="/src/assets/images/ELEMENTOS-4 CARIMBO PADRÃO.png" alt="carimbo-padrão" id='carimbo-padrao' />
      </div>
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
          
          <p>Não tem uma conta? <Link to ="/CadastroUser">Registre-se</Link></p>
        </form>
      </div>
    </div>
    
  );
}



export default FormLogin;