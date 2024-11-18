import { useState } from "react";
import "./Banners.css"; // Arquivo CSS para estilizar os banners

const PesquisasRecentes = () => {
  const [pesquisasRecentes, setPesquisasRecentes] = useState([]);
  const [novaPesquisa, setNovaPesquisa] = useState("");

  // Adicionar nova pesquisa e ordená-las
  const adicionarPesquisa = () => {
    if (!novaPesquisa.trim()) return; // Ignorar entradas vazias

    setPesquisasRecentes((prevPesquisas) => {
      const atualizadas = [...prevPesquisas, novaPesquisa];
      const semDuplicados = [...new Set(atualizadas)]; // Remover duplicados
      return semDuplicados.sort((a, b) => a.localeCompare(b)); // Ordenar alfabeticamente
    });

    setNovaPesquisa(""); // Limpar o input
  };

  return (
    <div>
      <h1>Pesquisas Recentes</h1>

      {/* Input e botão */}
      <div className="input-container">
        <input
          type="text"
          value={novaPesquisa}
          placeholder="Digite sua pesquisa..."
          onChange={(e) => setNovaPesquisa(e.target.value)}
        />
        <button onClick={adicionarPesquisa}>Adicionar</button>
      </div>

      {/* Exibição dos banners */}
      <div className="banners-container">
        {pesquisasRecentes.map((pesquisa, index) => (
          <div key={index} className="banner">
            {pesquisa}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PesquisasRecentes;
