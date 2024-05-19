import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Listar Vagas</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro de Reserva</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
