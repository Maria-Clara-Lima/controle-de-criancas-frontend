import { useState } from "react";
import { FaUser, FaArrowLeft } from "react-icons/fa"; // Ícones
import { IoClose } from "react-icons/io5"; // Ícone do "x"
import { FormCadastroCrianca } from "../../components/formCadastroCrianca/FormCadastroCrianca"; // Importação do formulário
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
        formData.append('nome', nomeCrianca);
        formData.append('data_nascimento', dataNascimento);
        formData.append('sala', sala);
        formData.append('nomeResponsavel1', nomeResponsavel1);
        formData.append('telefoneResponsavel1', telefoneResponsavel1);
        formData.append('parentesco1', parentesco1);
        formData.append('nomeResponsavel2', nomeResponsavel2);
        formData.append('telefoneResponsavel2', telefoneResponsavel2);
        formData.append('parentesco2', parentesco2);
        formData.append('classificacao', tipo);
        formData.append('observacao', observacao);
        if (foto) {
          formData.append('foto', foto); // Adicionando a foto
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
    <FormCadastroCrianca
      formData={{
        nomeCrianca,
        dataNascimento,
        sala,
        nomeResponsavel1,
        telefone1,
        parentesco1,
        nomeResponsavel2,
        telefone2,
        parentesco2,
        tipo,
        observacao,
        foto,
      }}
      handleChange={{
        setNomeCrianca,
        setDataNascimento,
        setSala,
        setNomeResponsavel1,
        setTelefone1: (value) => handleTelefoneChange(value, setTelefone1),
        setParentesco1,
        setNomeResponsavel2,
        setTelefone2: (value) => handleTelefoneChange(value, setTelefone2),
        setParentesco2,
        setTipo,
        setObservacao,
      }}
      handleSubmit={handleSubmit}
      errors={invalidFields}
      successMessage={successMessage}
    />
  );
};

export default CadastroCrianca;
