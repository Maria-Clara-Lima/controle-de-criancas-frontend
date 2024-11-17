import React, { useState } from "react";
import FormCadastroUser from '../../components/formCadastroUser/FormCadastroUser.jsx';
import './cadastroUser.css';
import axios from 'axios';

const CadastroUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmar_senha: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/api/cadastro/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            // Exibe a mensagem de sucesso
            setSuccessMessage(data.status);
            setFormData({ username: '', password: '', confirmar_senha: '' }); // Limpa o formulário
        } else {
            // Exibe os erros
            if (data.error) {
                setErrors({ general: data.error });
            } else {
                // Erros específicos de campos (como "As senhas não coincidem.")
                setErrors(data);
            }
        }
    } catch (error) {
        setErrors({ general: 'Ocorreu um erro ao tentar registrar o usuário. Tente novamente.' });
    }
};


  return (
    <FormCadastroUser 
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      successMessage={successMessage}
    />
  );
};

export default CadastroUser;
