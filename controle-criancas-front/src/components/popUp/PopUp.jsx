import React, { useState } from 'react';
import './popUp.css';
import { IoIosArrowBack } from "react-icons/io";

const PopUp = ({ crianca, onClose }) => {
    // Estado para a mensagem de sucesso
    const [message, setMessage] = useState('');

    const handleAction = () => {
        if (!crianca || !crianca.id_crianca) {
            console.error('Criança ou ID não definido!');
            return;
        }

        const action = crianca.status === 'check-in' ? 'checkout' : 'checkin';

        // Faz a requisição de checkin/checkout
        fetch(`http://127.0.0.1:8000/api/controle/${crianca.id_crianca}/`, {
            method: 'POST',
        })
            .then((response) => {
                if (response.ok) {
                    // Atualiza a mensagem de sucesso
                    setMessage(`${action.toUpperCase()} realizado com sucesso!`);

                    // Atualiza o status da criança
                    crianca.status = action === 'checkin' ? 'check-in' : 'checkout';

                    // Atualiza o botão de controle para o próximo estado
                    setTimeout(() => {
                        onClose();
                    }, 2000); // Fecha o popup após 2 segundos
                } else {
                    alert('Ocorreu um erro. Tente novamente.');
                }
            })
            .catch((error) => console.error('Erro ao realizar ação:', error));
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="botao-back" onClick={onClose}>
                    <IoIosArrowBack /> Voltar
                </button>

                <h2>{crianca.nome}</h2>
                <p><strong>Idade:</strong> {crianca.idade} anos</p>
                <p><strong>Sala:</strong> {crianca.sala}</p>
                <p><strong>Classificação:</strong> {crianca.classificacao}</p>
                <p><strong>Status Atual:</strong> {crianca.status === 'check-in' ? 'Presente' : 'Ausente'}</p>

                {/* Exibindo os dados dos responsáveis */}
                <div>
                    <strong>Responsáveis:</strong>
                    {crianca.responsaveis && crianca.responsaveis.length > 0 ? (
                        <ul>
                            {crianca.responsaveis.map((responsavel, index) => (
                                <li key={index}>
                                    <strong>{responsavel.nome}</strong> ({responsavel.relacionamento_crianca}) - <strong>Telefone</strong>: {responsavel.telefone_responsavel}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Sem responsáveis cadastrados.</p>
                    )}
                </div>

                <p><strong>Observação:</strong> {crianca.observacao || 'Nenhuma observação disponível.'}</p>

                {/* Exibe a mensagem de sucesso, se houver */}
                {message && <p className="success-message">{message}</p>}

                <button className="botao-checkin" onClick={handleAction}>
                    {crianca.status === 'check-in' ? 'Fazer Check-out' : 'Fazer Check-in'}
                </button>
            </div>
        </div>
    );
};

export default PopUp;
