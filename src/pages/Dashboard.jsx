import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className="dashboard-container">
      {/* Botão de + no canto superior direito */}
      <div className="add-button-container">
        <button className="add-button" onClick={handleAddButtonClick}>+</button>
      </div>

      {/* Ícone de foto centralizado */}
      <div className="photo-container">
        <img 
          src="src/assets/images/Logotipo Jardim Perfil ZN.png" 
          alt="Profile" 
          className="profile-photo" 
        />
      </div>

      {/* Campo de pesquisa centralizado */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 016.32 12.906l4.393 4.391-1.414 1.414-4.391-4.393A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" fill="black"/>
            </svg>
          </span>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Insira o nome da criança" 
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
