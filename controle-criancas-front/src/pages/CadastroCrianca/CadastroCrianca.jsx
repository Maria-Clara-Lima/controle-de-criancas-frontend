import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaArrowLeft } from "react-icons/fa"; // Ícones
import { IoClose } from "react-icons/io5"; // Ícone do "x"
import axios from "axios";
import "./CadastroCrianca.css";

const CadastroCrianca = () => {
  const [nomeCrianca, setNomeCrianca] = useState("");
  const [nomeResponsavel1, setNomeResponsavel1] = useState("");
  const [nomeResponsavel2, setNomeResponsavel2] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sala, setSala] = useState("");
  const [tipo, setTipo] = useState(""); // membro ou visitante
  const [observacao, setObservacao] = useState("");
  const [foto, setFoto] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentesco1, setParentesco1] = useState("");
  const [parentesco2, setParentesco2] = useState("");
  const [invalidFields, setInvalidFields] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
        setIsModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setFoto("");
    setIsModalOpen(false);
  };

  const handleTelefoneChange = (value, setTelefone) => {
    value = value.replace(/\D/g, ""); // Apenas números
    if (value.length > 0) value = `(${value}`;
    if (value.length > 3) value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    if (value.length > 9) value = `(${value.slice(0, 3)}) ${value.slice(3, 7)}-${value.slice(7)}`;
    setTelefone(value);
  };

  const handleDataNascimentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Apenas números
    if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
    if (value.length > 4) value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    setDataNascimento(value);
  };

  const validateForm = () => {
    if (
      !nomeCrianca ||
      !dataNascimento ||
      !sala ||
      !nomeResponsavel1 ||
      !telefone1 ||
      !parentesco1 ||
      !tipo
    ) {
      setInvalidFields(true);
      return false;
    }
    setInvalidFields(false);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append("nome", nomeCrianca);
        formData.append("data_nascimento", dataNascimento);
        formData.append("sala", sala);
        formData.append("nomeResponsavel1", nomeResponsavel1);
        formData.append("telefoneResponsavel1", telefone1);
        formData.append("parentesco1", parentesco1);
        formData.append("nomeResponsavel2", nomeResponsavel2);
        formData.append("telefoneResponsavel2", telefone2);
        formData.append("parentesco2", parentesco2);
        formData.append("classificacao", tipo);
        formData.append("observacao", observacao);
        if (foto) {
          formData.append("foto", foto); // Adicionando a foto
        }

        const response = await fetch("http://127.0.0.1:8000/api/cadastro/crianca/", {
          method: "POST",
          body: formData, // Usando FormData em vez de JSON
        });

        if (response.ok) {
          setSuccessMessage("Cadastro realizado com sucesso!");
          // Limpar o formulário
          setNomeCrianca("");
          setDataNascimento("");
          setSala("");
          setNomeResponsavel1("");
          setTelefone1("");
          setParentesco1("");
          setNomeResponsavel2("");
          setTelefone2("");
          setParentesco2("");
          setTipo("");
          setObservacao("");
          setFoto("");
        } else {
          throw new Error("Erro ao realizar o cadastro.");
        }
      } catch (error) {
        alert("Ocorreu um erro. Por favor, tente novamente.");
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Criança</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome da Criança:</label>
        <input
          type="text"
          name="nomeCrianca"
          value={nomeCrianca}
          onChange={(e) => setNomeCrianca(e.target.value)}
          required
        />

        <label>Sala:</label>
        <input
          type="text"
          name="sala"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          required
        />

        <label>Telefone do Responsável 1:</label>
        <input
          type="text"
          name="telefone1"
          value={telefone1}
          onChange={(e) => handleTelefoneChange(e.target.value, setTelefone1)}
          required
        />

        <label>Nome do Responsável 1:</label>
        <input
          type="text"
          name="nomeResponsavel1"
          value={nomeResponsavel1}
          onChange={(e) => setNomeResponsavel1(e.target.value)}
          required
        />

        <label>Telefone do Responsável 2:</label>
        <input
          type="text"
          name="telefone2"
          value={telefone2}
          onChange={(e) => handleTelefoneChange(e.target.value, setTelefone2)}
        />

        <label>Nome do Responsável 2:</label>
        <input
          type="text"
          name="nomeResponsavel2"
          value={nomeResponsavel2}
          onChange={(e) => setNomeResponsavel2(e.target.value)}
        />

        <label>Data de Nascimento:</label>
        <input
          type="text"
          name="dataNascimento"
          value={dataNascimento}
          onChange={handleDataNascimentoChange}
          required
        />

        <label>Classificação:</label>
        <select
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="membro">Membro</option>
          <option value="visitante">Visitante</option>
        </select>

        <label>Observações:</label>
        <textarea
          name="observacao"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />

        <label>Foto:</label>
        <input
          type="file"
          onChange={handleFileChange}
        />

        {foto && (
          <div>
            <img src={foto} alt="Foto da Criança" />
            <button type="button" onClick={handleRemovePhoto}>Remover Foto</button>
          </div>
        )}

        {invalidFields && <p className="error-message">Preencha todos os campos obrigatórios.</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Confirmar Cadastro</button>
      </form>
    </div>
  );
};

export default CadastroCrianca;
