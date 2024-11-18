import { useNavigate } from "react-router-dom"; // React Router para navegação
import './ButtonBack.css'; // Importando o arquivo CSS para o botão

const BackButton = () => {
  const navigate = useNavigate(); // Usando o hook useNavigate

  // Função chamada ao clicar no botão, que leva o usuário à página anterior
  const handleBack = () => {
    navigate(-1); // Volta uma página no histórico de navegação
  };

  return (
    <button onClick={handleBack} className="back-button">
      <span className="arrow">←</span>
    </button>
  );
};

export default BackButton;