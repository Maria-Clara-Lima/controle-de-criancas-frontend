import { useNavigate } from "react-router-dom"; // React Router para navegação
import './ButtonBack.css'; // Importando o arquivo CSS para o botão

const BackButton = () => {
  const navigate = useNavigate(); // Usando o hook useNavigate

  // Função chamada ao clicar no botão, que leva o usuário à página anterior
  const handleBack = () => {
    navigate(-1); // Volta uma página no histórico de navegação
  };

  return (
    <button onClick={handleBack} className="voltar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path d="M11 7H4.707l3.646-3.646a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L4.707 9H11a.5.5 0 0 0 0-1z" />
      </svg>
    </button>
  );
};

export default BackButton;