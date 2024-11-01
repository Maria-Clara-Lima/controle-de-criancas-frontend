import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Importa o ícone de usuário
import "./Cadastro.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sala, setSala] = useState("");
  const [tipo, setTipo] = useState(""); // "membro" ou "visitante"
  const [observacao, setObservacao] = useState("");
  const [foto, setFoto] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result); // Define a foto como uma string de base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setFoto(""); // Remove a foto
  };

  const handleNumeroChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length <= 11) {
      if (value.length > 0) value = `(${value}`;
      if (value.length > 3) value = `${value.slice(0, 3)}) ${value.slice(3)}`;
      if (value.length > 9) value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    setNumero(value);
  };

  const handleDataNascimentoChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length <= 8) {
      if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
      if (value.length > 5) value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }
    setDataNascimento(value);
  };

  return (
    <form className="cadastro-form">
      {/* Ícone de foto */}
      <label htmlFor="foto" className="foto-label">
        <div className="foto-icon">
          {foto ? (
            <img src={foto} alt="Foto de perfil" />
          ) : (
            <FaUser className="user-icon" />
          )}
        </div>
        <input
          type="file"
          id="foto"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }} 
        />
      </label>
      <button type="button" onClick={handleRemovePhoto} className="remove-photo-button">
        Remover Foto
      </button>

      {/* Campo Nome */}
      <div className="form-group">
        <label htmlFor="nome">Nome da criança (completo):</label>
        <input type="text" id="nome" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      </div>

      {/* Campo Data de Nascimento */}
      <div className="form-group">
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input
          type="text" id="dataNascimento" value={dataNascimento} placeholder="DD/MM/YYYY" maxLength="10" onChange={handleDataNascimentoChange}
        />
      </div>

      {/* Seleção de Sala */}
      <div className="form-group">
        <label htmlFor="sala">Sala:</label>
        <select id="sala" value={sala} onChange={(e) => setSala(e.target.value)} >
          <option value="">Escolha uma opção</option>
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
          <option value="3">Sala 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="responsavel1">Nome do responsável 1:</label>
        <input type="text" id="responsavel1" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="telefone1">Telefone do responsável 1:</label>
        <input type="tel" id="telefone1" value={numero}  placeholder="(00) 00000-0000" maxLength="15" onChange={handleNumeroChange} />
      </div>

      <div className="form-group">
        <label htmlFor="responsavel2">Nome do responsável 2:</label>
        <input type="text" id="responsavel2" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      </div>

      {/* Campo Número de Telefone */}
      <div className="form-group">
        <label htmlFor="telefone2">Telefone do responsável 2:</label>
        <input type="tel" id="telefone2" value={numero}  placeholder="(00) 00000-0000" maxLength="15" onChange={handleNumeroChange} />
      </div>

      {/* Checkbox para tipo */}
      <div className="form-group">
        <label>Marque uma opção:</label>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="radio" value="membro"checked={tipo === "membro"} onChange={(e) => setTipo(e.target.value)} />
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
        <label htmlFor="observacao">Observação da criança:</label>
        <textarea
          id="observacao"
          value={observacao}
          placeholder="Digite aqui"
          onChange={(e) => setObservacao(e.target.value)}
        />
      </div>

      {/* Botão de enviar */}
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
