// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/DAshboard'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota da Tela Principal */}
          <Route path="/" element={<Dashboard />} />
          {/* Rota da Tela de Cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
