import { ScrollView, StyleSheet } from "react-native";
import Header from "../src/components/Header";
import CardIndicador from "../src/components/CardIndicador";
import GraficoLinha from "../src/components/GraficoLinha";
import GraficoPizza from "../src/components/GraficoPizza";
import { useApp } from "../src/context/AppContext";

import {
  indicadores,
  dadosRiscoSemanal,
  dadosDistribuicaoRisco,
} from "../src/data/mockData";

export default function Dashboard() {
  const { tema } = useApp();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
    >
      <Header
        titulo="Dashboard Ambiental"
        subtitulo="Indicadores simulados a partir de dados espaciais para análise de risco."
      />

      {indicadores.map((item) => (
        <CardIndicador
          key={item.id}
          titulo={item.titulo}
          valor={item.valor}
          descricao={item.descricao}
        />
      ))}

      <GraficoLinha
        titulo="Evolução do risco semanal"
        dados={dadosRiscoSemanal}
      />

      <GraficoPizza
        titulo="Distribuição dos níveis de risco"
        dados={dadosDistribuicaoRisco}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});