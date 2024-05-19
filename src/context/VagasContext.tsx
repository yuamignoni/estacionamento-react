import React, { createContext, useContext, useState, ReactNode } from "react";

interface Vaga {
  placa: string;
  nome: string;
  apartamento: string;
  bloco: string;
  modelo: string;
  cor: string;
  vaga: string;
}

interface VagasContextType {
  vagas: Vaga[];
  contador: number;
  adicionarVaga: (vaga: Vaga) => void;
  removerVaga: (index: number) => void;
}

const VagasContext = createContext<VagasContextType | undefined>(undefined);

export const useVagas = () => {
  const context = useContext(VagasContext);
  if (!context) {
    throw new Error("useVagas must be used within a VagasProvider");
  }
  return context;
};

export const VagasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vagas, setVagas] = useState<Vaga[]>([
    {
      placa: "ABC-1234",
      nome: "João Silva",
      apartamento: "101",
      bloco: "A",
      modelo: "Honda Civic",
      cor: "Preto",
      vaga: "1",
    },
    {
      placa: "DEF-5678",
      nome: "Maria Souza",
      apartamento: "202",
      bloco: "B",
      modelo: "Toyota Corolla",
      cor: "Branco",
      vaga: "2",
    },
  ]);
  const [contador, setContador] = useState<number>(13); // 15 vagas iniciais menos as 2 vagas fictícias

  const adicionarVaga = (vaga: Vaga) => {
    setVagas((prevVagas) => [...prevVagas, vaga]);
    setContador((prevContador) => prevContador - 1);
  };

  const removerVaga = (index: number) => {
    setVagas((prevVagas) => prevVagas.filter((_, i) => i !== index));
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <VagasContext.Provider
      value={{ vagas, contador, adicionarVaga, removerVaga }}
    >
      {children}
    </VagasContext.Provider>
  );
};
