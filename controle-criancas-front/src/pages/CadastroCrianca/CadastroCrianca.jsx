import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importando o hook useNavigate
import "./CadastroCrianca.css";

const CadastroCrianca = () => {
  const navigate = useNavigate();  // Usando o hook para redirecionar
  const [nomeCrianca, setNomeCrianca] = useState("");
  const [nomeResponsavel1, setNomeResponsavel1] = useState("");
  const [parentesco1, setParentesco1] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [nomeResponsavel2, setNomeResponsavel2] = useState("");
  const [parentesco2, setParentesco2] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sala, setSala] = useState(""); 
  const [tipo, setTipo] = useState(""); 
  const [observacao, setObservacao] = useState("");
  const [foto, setFoto] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [invalidFields, setInvalidFields] = useState(false);

  const handleTelefoneChange = (value, setTelefone) => {
    const rawValue = value.replace(/\D/g, "");
    setTelefone(rawValue);
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
        // Preparando os dados como um objeto JSON
        const data = {
          nome: nomeCrianca,
          data_nascimento: dataNascimento,
          classificacao: tipo,
          sala: sala,
          observacao: observacao,
          responsavel_1: {
            nome: nomeResponsavel1,
            telefone_responsavel: telefone1,
            relacionamento_crianca: parentesco1,
          },
        };

        // Adicionando responsável 2 se existir
        if (nomeResponsavel2) {
          data.responsavel_2 = {
            nome: nomeResponsavel2,
            telefone_responsavel: telefone2,
            relacionamento_crianca: parentesco2,
          };
        }

        // Logando os dados para verificar o formato
        console.log("Dados enviados para o servidor:", data);

        const response = await fetch("http://127.0.0.1:8000/api/cadastro/crianca/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Enviando como JSON
        });

        // Verificando a resposta do servidor
        if (response.ok) {
          setSuccessMessage("Cadastro realizado com sucesso!");
          
          // Redirecionando para o dashboard
          navigate("/dashboard", { state: { successMessage: "Cadastro realizado com sucesso!" } });

          // Resetando os campos após o cadastro
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
          const errorData = await response.json();
          console.error("Erro de resposta:", errorData);
          alert("Erro desconhecido ao realizar o cadastro.");
        }
      } catch (error) {
        console.error("Erro ao realizar o cadastro:", error);
        alert("Ocorreu um erro. Por favor, tente novamente.");
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Criança</h1>
      <form onSubmit={handleSubmit}>
        <label>Foto:</label>
        <input type="file" onChange={(e) => setFoto(e.target.files[0])} />

        <label>Nome da Criança:</label>
        <input
          type="text"
          name="nomeCrianca"
          value={nomeCrianca}
          onChange={(e) => setNomeCrianca(e.target.value)}
          required
        />

        <label>Sala:</label>
        <select
          name="sala"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          required
        >
          <option value="">Selecione a sala</option>
          <option value="kids 1">Kids 1</option>
          <option value="kids 2">Kids 2</option>
          <option value="kids 3">Kids 3</option>
          <option value="teens">Teens</option>
          <option value="adolescentes">Adolescentes</option>
        </select>

        <label>Nome do Responsável 1:</label>
        <input
          type="text"
          name="responsavel_1"
          value={nomeResponsavel1}
          onChange={(e) => setNomeResponsavel1(e.target.value)}
          required
        />

        <label>Parentesco com a Criança:</label>
        <input
          type="text"
          name="parentesco1"
          value={parentesco1}
          onChange={(e) => setParentesco1(e.target.value)}
          required
        />

        <label>Telefone do Responsável 1:</label>
        <input
          type="text"
          inputMode="numeric"
          name="telefone1"
          value={telefone1}
          onChange={(e) => handleTelefoneChange(e.target.value, setTelefone1)}
          maxLength={11}
          required
          placeholder="81999999999"
        />

        <label>Nome do Responsável 2:</label>
        <input
          type="text"
          name="responsavel_2"
          value={nomeResponsavel2}
          onChange={(e) => setNomeResponsavel2(e.target.value)}
        />

        <label>Parentesco com a Criança:</label>
        <input
          type="text"
          name="parentesco2"
          value={parentesco2}
          onChange={(e) => setParentesco2(e.target.value)}
        />

        <label>Telefone do Responsável 2:</label>
        <input
          type="text"
          inputMode="numeric"
          name="telefone2"
          value={telefone2}
          onChange={(e) => handleTelefoneChange(e.target.value, setTelefone2)}
          maxLength={11}
          placeholder="81999999999"
        />

        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="dataNascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />

        <label>Classificação:</label>
        <select
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="membro">Membro</option>
          <option value="visitante">Visitante</option>
          <option value="congregado">Congregado</option>
        </select>

        <label>Observações:</label>
        <textarea
          name="observacao"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />

        {invalidFields && <p className="error-message">Preencha todos os campos obrigatórios.</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Confirmar Cadastro</button>
      </form>
    </div>
  );
};

export default CadastroCrianca;
