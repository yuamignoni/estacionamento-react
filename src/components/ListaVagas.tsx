import React from "react";
import { useVagas } from "../context/VagasContext";
import "./ListaVagas.css";

const ListaVagas: React.FC = () => {
  const { vagas, contador, removerVaga } = useVagas();

  return (
    <div className="vagas-list">
      <h2>Vagas Cadastradas</h2>
      <p>
        <strong>Vagas Disponíveis:</strong> {contador}
      </p>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index} className="vaga-item">
            <p>
              <strong>Placa:</strong> {vaga.placa}
            </p>
            <p>
              <strong>Nome:</strong> {vaga.nome}
            </p>
            <p>
              <strong>Apartamento:</strong> {vaga.apartamento}
            </p>
            <p>
              <strong>Bloco:</strong> {vaga.bloco}
            </p>
            <p>
              <strong>Modelo:</strong> {vaga.modelo}
            </p>
            <p>
              <strong>Cor:</strong> {vaga.cor}
            </p>
            <p>
              <strong>Vaga:</strong> {vaga.vaga}
            </p>
            <button
              onClick={() => removerVaga(index)}
              className="remove-button"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVagas;
