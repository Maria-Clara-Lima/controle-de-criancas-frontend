/* eslint-disable no-unused-vars */

/* PasswordEye.js */
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";



function PasswordEye() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const alterarIcone = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    return (
      <div className='senha-container'>
        <input 
          type={senhaVisivel ? "text" : "password"} 
          placeholder='Senha' 
          required 
        />
        {senhaVisivel ? (
          <FaEye className="icone" onClick={alterarIcone} />
        ) : (
          <FaEyeSlash className="icone" onClick={alterarIcone} />
        )}
      </div>
    );
}

export default PasswordEye;
