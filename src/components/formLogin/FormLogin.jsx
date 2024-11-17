/* eslint-disable no-unused-vars */
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa"
import PasswordEye from "../../components/formLogin/PasswordEye.jsx"
import { Link } from "react-router-dom"


const FormLogin = ({formData, handleChange, handleSubmit, errors, sucessMessage}) => {
  return (
    <div className='principal'>
      <div className="icon-image"></div>
      <div className="container">
        <form onSubmit={handleSubmit}>  
          <h1>Administrador</h1>
          
          <div className="input-container">
            <input 
            type="text" 
            name="username"
            maxLength="25" 
            placeholder="Insira o nome do usuário" 
            value={formData.username}
            onChange={handleChange}
            required 
            />
            <FaUser className='icone'/>
          </div>

          <div className="input-container-eye">
            <PasswordEye 
              type="password"
              name="password"
              placeholder="Digite a senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {errors.general && <p className='error'>{errors.general}</p>}
          {sucessMessage && <p className='sucess'>{sucessMessage}</p>}
          
          <button type='submit'>Entrar</button>
          
          <p>Não tem uma conta? <Link to ="/CadastroUser">Registre-se</Link></p>
        </form>
      </div>
    </div>
    
  );
}

export default FormLogin;
