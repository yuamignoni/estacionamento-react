import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListarVagas from "./pages/ListarVagas";
import CadastroReserva from "./pages/CadastroReserva";
import { VagasProvider } from "./context/VagasContext";
import "./App.css";

function App() {
  return (
    <VagasProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ListarVagas />} />
              <Route path="/cadastro" element={<CadastroReserva />} />
            </Routes>
          </main>
        </div>
      </Router>
    </VagasProvider>
  );
}

export default App;
