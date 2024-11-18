import React, { useState } from "react";
import './FormCadastroCrianca.css';
import { useNavigate } from 'react-router-dom';

const FormCadastroCrianca = () => {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    sala: '',
    nomeResponsavel1: '',
    telefoneResponsavel1: '',
    nomeResponsavel2: '',
    telefoneResponsavel2: '',
    classificacao: '',
    observacoes: '',
    foto: null,
  });

  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRedirect = () => {
    // Redireciona para o dashboard sem validar o formulário
    navigate('/dashboard');
  };

  return (
    <form>
        <label>
        Foto:
        <input
          type="file"
          name="foto"
          onChange={(e) => setFormData({ ...formData, foto: e.target.files[0] })}
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <label>
        Data de Nascimento:
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
        />
      </label>
      <label>
        Sala:
        <input
          type="text"
          name="sala"
          value={formData.sala}
          onChange={handleChange}
        />
      </label>
      <label>
        Nome do Responsável 1:
        <input
          type="text"
          name="nomeResponsavel1"
          value={formData.nomeResponsavel1}
          onChange={handleChange}
        />
      </label>
      <label>
        Telefone do Responsável 1:
        <input
          type="tel"
          name="telefoneResponsavel1"
          value={formData.telefoneResponsavel1}
          onChange={handleChange}
        />
      </label>
      <label>
        Nome do Responsável 2 (opcional):
        <input
          type="text"
          name="nomeResponsavel2"
          value={formData.nomeResponsavel2}
          onChange={handleChange}
        />
      </label>
      <label>
        Telefone do Responsável 2 (opcional):
        <input
          type="tel"
          name="telefoneResponsavel2"
          value={formData.telefoneResponsavel2}
          onChange={handleChange}
        />
      </label>
      <label>
        Classificação:
        <select
          name="classificacao"
          value={formData.classificacao}
          onChange={handleChange}
        >
          <option value="membro">Membro</option>
          <option value="visitante">Visitante</option>
          <option value="congregado">Congregado</option>
        </select>
      </label>
      <label>
        Observações:
        <textarea
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleRedirect} className="submit-button">
        Cadastrar
      </button>
    </form>
  );
};

export default FormCadastroCrianca;

