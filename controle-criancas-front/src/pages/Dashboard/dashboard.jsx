import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { FiPlus } from "react-icons/fi";
import PopUp from '../../components/popUp/PopUp.jsx'; // Certifique-se de importar o PopUp corretamente
import Footer from '../../components/footer/Footer.jsx';

// Função para buscar as crianças
const fetchCriancas = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/criancas/');
        if (!response.ok) throw new Error('Erro ao carregar crianças');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar as crianças:', error);
        return [];
    }
};

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [criancas, setCriancas] = useState([]);
    const [filteredCriancas, setFilteredCriancas] = useState([]);
    const [selectedCrianca, setSelectedCrianca] = useState(null); // Criança selecionada
    const [showPopup, setShowPopup] = useState(false); // Controla exibição do popup

    // Carrega as crianças ao montar o componente
    useEffect(() => {
        const getCriancas = async () => {
            const data = await fetchCriancas();
            setCriancas(data);
            setFilteredCriancas(data);
        };
        getCriancas();
    }, []);

    // Função para filtrar as crianças com base na pesquisa
    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = criancas.filter((crianca) =>
            crianca.nome.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCriancas(filtered);
    };

    // Função para abrir o popup com a criança selecionada
    const handleSelectCrianca = (crianca) => {
        setSelectedCrianca(crianca);
        setShowPopup(true);
    };

    return (
        <div className="dashboard-page">
            <header>
                <img className="logo" src="/src/assets/images/Logotipo Jardim Perfil ZN.png" alt="Logo" />
                <Link to="/CadastroCrianca" className="botao-cadastro">
                    <FiPlus />
                </Link>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Pesquisar criança..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </header>

            <main className="dashboard-main">
                <ul className="children-list">
                    {searchTerm.trim() !== "" && filteredCriancas.length > 0 ? (
                        filteredCriancas.map((crianca) => (
                            <li
                                key={crianca.id} // Garante que cada item da lista tem um key único
                                className="child-item"
                                onClick={() => handleSelectCrianca(crianca)}
                            >
                                <div className="child-info">
                                    <h3>{crianca.nome}</h3>
                                    <p>
                                        <strong>Sala:</strong> {crianca.sala} <br />
                                        <strong>Idade:</strong> {crianca.idade} anos
                                    </p>
                                </div>
                            </li>
                        ))
                    ) : (
                        searchTerm.trim() !== "" && (
                            <p className="no-results">Nenhum registro encontrado</p>
                        )
                    )}
                </ul>
            </main>

            {/* Popup para exibir detalhes */}
            {showPopup && (
                <PopUp
                    crianca={selectedCrianca}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <Footer />
        </div>
    );
};

export default Dashboard;
