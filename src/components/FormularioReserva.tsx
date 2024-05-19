import React, { useState } from "react";
import { useVagas } from "../context/VagasContext";
import "./FormularioReserva.css";

interface FormData {
  placa: string;
  nome: string;
  apartamento: string;
  bloco: string;
  modelo: string;
  cor: string;
  vaga: string;
}

const FormularioReserva: React.FC = () => {
  const { adicionarVaga } = useVagas();
  const [formData, setFormData] = useState<FormData>({
    placa: "",
    nome: "",
    apartamento: "",
    bloco: "",
    modelo: "",
    cor: "",
    vaga: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarVaga(formData);
    console.log(formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Placa do Veículo:
        <input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Nome do Proprietário:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Número do Apartamento:
        <input
          type="text"
          name="apartamento"
          value={formData.apartamento}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Bloco do Apartamento:
        <input
          type="text"
          name="bloco"
          value={formData.bloco}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Modelo do Veículo:
        <input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Cor do Veículo:
        <input
          type="text"
          name="cor"
          value={formData.cor}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Número da Vaga:
        <input
          type="text"
          name="vaga"
          value={formData.vaga}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormularioReserva;
