import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/login.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import CadastroUser from "./pages/CadastroUser/CadastroUser.jsx";
import CadastroCrianca from "./pages/CadastroCrianca/CadastroCrianca.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CadastroUser" element={<CadastroUser/>} />
        <Route path="/CadastroCrianca" element={<CadastroCrianca/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
