import React, { useState } from 'react';
import FormLogin from '../../components/formLogin/FormLogin.jsx';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
  
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message || 'Login realizado com sucesso!');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 400);
      } else {
        if (data.non_field_errors) {
          setErrors({ general: data.non_field_errors[0] });
        } else {
          setErrors({ general: data.error || 'Erro desconhecido no login.' });
        }
      }
    } catch (error) {
      setErrors({ general: 'Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.' });
    }
  };

  return (
    <FormLogin
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      successMessage={successMessage}
    />
  );
};

export default Login;
