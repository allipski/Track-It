import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Habitos from "../pages/Habitos";
import Hoje from "../pages/Hoje";
import Historico from "../pages/Historico";
import PersonContext from "../contexts/PersonContext";
import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <PersonContext.Provider value={{ person, setPerson }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </PersonContext.Provider>
      </BrowserRouter>
    </>
  );
}
