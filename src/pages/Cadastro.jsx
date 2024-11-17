import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // ícone de usuário
import { IoClose } from "react-icons/io5"; // ícone do x
import { FaArrowLeft } from "react-icons/fa"; // ícone da seta

import "./Cadastro.css";

const Cadastro = () => {
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

  const handleTelefone1Change = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // so numeros
    if (value.length <= 11) {
      if (value.length > 0) value = `(${value}`;
      if (value.length > 3) value = `${value.slice(0, 3)}) ${value.slice(3)}`;
      if (value.length > 9) value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    setTelefone1(value);
  };

  const handleTelefone2Change = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // so numeros
    if (value.length <= 11) {
      if (value.length > 0) value = `(${value}`;
      if (value.length > 3) value = `${value.slice(0, 3)}) ${value.slice(3)}`;
      if (value.length > 9) value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    setTelefone2(value);
  };

  const handleDataNascimentoChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // so numeros
    if (value.length <= 8) {
      if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
      if (value.length > 5) value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Lógica de cadastro
      alert("Cadastro realizado com sucesso!");
    }
  };

  
  return (
    <div>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        {/* Título e botão de voltar */}
        <div className="form-title-container">
          <h1 className="form-title">Cadastro</h1>
          <button
            type="button"
            className="back-button"
            onClick={() => window.location.href = '/'}
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Ícone de foto */}
        <label htmlFor="foto" className="foto-label" onClick={() => setIsModalOpen(true)}>
          <div className="foto-icon">
            {foto ? (
              <img src={foto} alt="Foto de perfil" />
            ) : (
              <FaUser className="user-icon" />
            )}
          </div>
        </label>

        {/* Card de erros */}
        {invalidFields && (
          <div className="error-card">
            <h3>Por favor, preencha os campos obrigatórios.</h3>
          </div>
        )}

        {/* Campo Nome da Criança */}
        <div className="form-group">
          <label htmlFor="nomeCrianca">Nome da criança (completo):  <span className="required">*</span></label>
          <input
            type="text"
            id="nomeCrianca"
            value={nomeCrianca}
            placeholder="Nome"
            onChange={(e) => setNomeCrianca(e.target.value)}
          />
        </div>

        {/* Campo Data de Nascimento */}
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento: <span className="required">*</span></label>
          <input
            type="text"
            id="dataNascimento"
            value={dataNascimento}
            placeholder="DD/MM/YYYY"
            maxLength="10"
            onChange={handleDataNascimentoChange}
          />
        </div>

        {/* Seleção de Sala */}
        <div className="form-group">
          <label htmlFor="sala">Sala: <span className="required">*</span></label>
          <select id="sala" value={sala} onChange={(e) => setSala(e.target.value)}>
            <option value="">Escolha uma opção</option>
            <option value="1">Sala 1</option>
            <option value="2">Sala 2</option>
            <option value="3">Sala 3</option>
          </select>
        </div>

        {/* Campos de Responsável */}
        <div className="form-group">
          <label htmlFor="responsavel1">Nome do responsável 1: <span className="required">*</span></label>
          <input
            type="text"
            id="responsavel1"
            value={nomeResponsavel1}
            placeholder="Nome"
            onChange={(e) => setNomeResponsavel1(e.target.value)}
          />
        </div>

        {/* Telefone do responsável 1 */}
        <div className="form-group">
          <label htmlFor="telefone1">Telefone do responsável 1: <span className="required">*</span></label>
          <input
            type="tel"
            id="telefone1"
            value={telefone1}
            placeholder="(00) 00000-0000"
            maxLength="15"
            onChange={handleTelefone1Change}
          />
        </div>

        {/* Parentesco 1 */}
        <div className="form-group">
          <label htmlFor="parentesco1">Parentesco do responsável 1: <span className="required">*</span></label>
          <input
            type="text"
            id="parentesco1"
            value={parentesco1}
            placeholder="Digite aqui"
            onChange={(e) => setParentesco1(e.target.value)}
          />
        </div>

         {/* Campo de Responsável 2*/}      
        <div className="form-group">
          <label htmlFor="responsavel2">Nome do responsável 2:</label>
          <input
            type="text"
            id="responsavel2"
            value={nomeResponsavel2}
            placeholder="Nome"
            onChange={(e) => setNomeResponsavel2(e.target.value)}
          />
        </div>

        {/* Telefone do responsável 2 */}
        <div className="form-group">
          <label htmlFor="telefone2">Telefone do responsável 2:</label>
          <input
            type="tel"
            id="telefone2"
            value={telefone2}
            placeholder="(00) 00000-0000"
            maxLength="15"
            onChange={handleTelefone2Change}
          />
        </div>

        {/* Parentesco 2 */}
        <div className="form-group">
          <label htmlFor="parentesco2">Parentesco do responsável 2:</label>
          <input
            type="text"
            id="parentesco2"
            value={parentesco2}
            placeholder="Digite aqui"
            onChange={(e) => setParentesco2(e.target.value)}
          />
        </div>


        {/* Checkbox para tipo */}
        <div className="form-group">
          <label>Marque uma opção: <span className="required">*</span></label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="radio"
                value="membro"
                checked={tipo === "membro"}
                onChange={(e) => setTipo(e.target.value)}
              />
              Membro
            </label>
            <label className="checkbox-label">
              <input
                type="radio"
                value="visitante"
                checked={tipo === "visitante"}
                onChange={(e) => setTipo(e.target.value)}
              />
              Visitante
            </label>
          </div>
        </div>

            {/* Campo de Observação */}
      <div className="form-group">
        <label htmlFor="observacao">Observação:</label>
        <textarea
          id="observacao"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
          placeholder="Digite aqui"
        />
      </div>

      {/* Botões de Ação */}
      <div className="form-actions">
        <button class="submit-button">Cadastrar</button>
      </div>
      </form>

     
        {/* Modal */}
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              <IoClose />
            </button>
            <div className="modal-foto-icon">
              <FaUser className="user-icon" />
            </div>
            <h2>Para garantir a segurança da criança, é importante incluir uma foto dela. Por favor, escolha uma foto.</h2>
            <br />
            <br />
            <div className="modal-buttons">
              <label className="modal-button">
                Escolher Foto
                <input
                  type="file"
                  accept="image/*"
                  className="modal-input"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
              <button className="modal-button" onClick={handleRemovePhoto}>Remover Foto</button>
            </div>
          </div>
        </div>
        )}
        </div>
        );
        };

export default Cadastro;
