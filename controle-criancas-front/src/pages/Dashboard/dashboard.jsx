import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

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
    const navigate = useNavigate();

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

    // Função para selecionar uma criança
    const handleSelectCrianca = (id) => {                    //lalalalalalala
        navigate(`/checkin/${id}`);
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
                                key={crianca.id}
                                className="child-item"
                                onClick={() => handleSelectCrianca(crianca.id)}
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
        </div>
    );
};

export default Dashboard;
