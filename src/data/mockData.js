export const indicadores = [
  {
    id: 1,
    titulo: "Risco de Queimada",
    valor: "78%",
    descricao: "Nível elevado detectado por simulação de dados espaciais",
  },
  {
    id: 2,
    titulo: "Umidade do Solo",
    valor: "24%",
    descricao: "Baixa umidade em área monitorada",
  },
  {
    id: 3,
    titulo: "Temperatura Média",
    valor: "34°C",
    descricao: "Temperatura acima da média regional",
  },
];

export const alertas = [
  {
    id: 1,
    regiao: "Norte de Minas Gerais",
    risco: "Alto",
    tipo: "Queimada",
    recomendacao: "Acionar equipes de prevenção e monitoramento.",
  },
  {
    id: 2,
    regiao: "Interior de São Paulo",
    risco: "Médio",
    tipo: "Baixa umidade",
    recomendacao: "Intensificar observação da vegetação seca.",
  },
];

export const dadosRiscoSemanal = {
  labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  datasets: [
    {
      data: [42, 55, 63, 70, 78, 74, 68],
    },
  ],
};

export const dadosDistribuicaoRisco = [
  {
    name: "Baixo",
    population: 35,
    color: "#4ADE80",
    legendFontColor: "#FFFFFF",
    legendFontSize: 13,
  },
  {
    name: "Médio",
    population: 40,
    color: "#FACC15",
    legendFontColor: "#FFFFFF",
    legendFontSize: 13,
  },
  {
    name: "Alto",
    population: 25,
    color: "#F87171",
    legendFontColor: "#FFFFFF",
    legendFontSize: 13,
  },
];