import React from 'react';
import './formCadastroUser.css';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import PasswordEyeConfirm from './PasswordEyeConfirm';
import PasswordEye from '../formLogin/PasswordEye';

function FormCadastroUser({ formData, handleChange, handleSubmit, errors, successMessage }) {
  return (
    <div className='principal'>
      <div className="icon-image"></div>
      <div className="container-register">
        <form onSubmit={handleSubmit}>
          <h1>Registre-se</h1>
          
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Insira o nome do usuário"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <FaUser className='icone' />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="input-container">
            <PasswordEye
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* {errors.password && <p className="error">{errors.password}</p>} */}
          </div>

          <div className="input-container">
            <PasswordEyeConfirm
              type="password"
              name="confirmar_senha"
              placeholder="Confirme sua senha"
              value={formData.confirmar_senha}
              onChange={handleChange}
              required
            />
            {/* {errors.confirmar_senha && <p className="error">{errors.confirmar_senha}</p>} */}
          </div>

          {successMessage && <p className="success">{successMessage}</p>}
          {errors.general && <p className="error">{errors.general}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
          {errors.confirmar_senha && <p className="error">{errors.confirmar_senha}</p>}

          <button type="submit">Registrar</button>

          <p>Já é registrado? <Link to="/">Faça login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default FormCadastroUser;
