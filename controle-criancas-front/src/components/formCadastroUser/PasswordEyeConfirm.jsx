/* eslint-disable no-unused-vars */

/* PasswordEye.js */
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";



function PasswordEyeConfirm({name, value, onChange}) {
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const alterarIcone = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    return (
      <div className='senha-container'>
        <input 
          className="input-password-register"
          type={senhaVisivel ? "text" : "password"} 
          name={name}
          value={value}
          onChange={onChange}
          maxLength="25"
          placeholder='Confirme sua senha' 
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

export default PasswordEyeConfirm;
