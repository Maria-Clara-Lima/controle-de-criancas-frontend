/* eslint-disable no-unused-vars */
import React from 'react';
import './formLogin.css'; 
import { FaUser } from "react-icons/fa";
import PasswordEye from "../../components/formLogin/PasswordEye.jsx";
import { Link } from "react-router-dom";

const FormLogin = ({ formData, handleChange, handleSubmit, errors, successMessage }) => {
  return (
    <div className='principal'>
      {/* Imagens decorativas */}
      <img src="/src/assets/images/ELEMENTOS-2 FLOR DE CANTO AMARELA.png" alt="folha-amarela-de-canto" id='folha-amarela' />
      <img src="/src/assets/images/ELEMENTOS-6 PÓLEM.png" alt="polen" id='polen' />
      
      <div className="icon-image">
        <img src="/src/assets/images/ELEMENTOS-4 CARIMBO PADRÃO.png" alt="carimbo-padrão" id='carimbo-padrao' />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>  
          <h1>Administrador</h1>
          
          {/* Campo de Nome de Usuário */}
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
            <FaUser className='icone' />
          </div>

          {/* Campo de Senha com ícone de exibição */}
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

          {/* Exibição de Mensagens de Erro e Sucesso */}
          {errors.general && <p className='error'>{errors.general}</p>}
          {successMessage && <p className='success'>{successMessage}</p>}
          
          {/* Botão de Login */}
          <button type='submit'>Entrar</button>
          
          {/* Link para cadastro */}
          <p>Não tem uma conta? <Link to="/CadastroUser">Registre-se</Link></p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
