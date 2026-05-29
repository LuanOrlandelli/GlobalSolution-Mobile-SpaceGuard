import { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Flame, Droplets, AlertTriangle } from "lucide-react-native";

import Header from "../src/components/Header";
import { alertas } from "../src/data/mockData";
import { useApp } from "../src/context/AppContext";

export default function Alertas() {
  const [filtro, setFiltro] = useState("Todos");
  const { tema } = useApp();

  const alertasFiltrados =
    filtro === "Todos" ? alertas : alertas.filter((item) => item.risco === filtro);

  const totalAlertas = alertas.length;
  const alertasAltos = alertas.filter((item) => item.risco === "Alto").length;
  const alertasMedios = alertas.filter((item) => item.risco === "Médio").length;

  function renderIcone(tipo) {
    if (tipo.includes("Queimada")) {
      return <Flame color="#F87171" size={24} />;
    }

    if (tipo.includes("umidade") || tipo.includes("Umidade")) {
      return <Droplets color="#38BDF8" size={24} />;
    }

    return <AlertTriangle color="#FACC15" size={24} />;
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
    >
      <Header
        titulo="Alertas Ambientais"
        subtitulo="Monitoramento de regiões com sinais de risco climático ou ambiental."
      />

      <View style={styles.resumoContainer}>
        <View style={[styles.resumoCard, { backgroundColor: tema.card }]}>
          <Text style={[styles.resumoNumero, { color: tema.texto }]}>{totalAlertas}</Text>
          <Text style={[styles.resumoTexto, { color: tema.textoSecundario }]}>Alertas</Text>
        </View>

        <View style={[styles.resumoCard, { backgroundColor: tema.card }]}>
          <Text style={[styles.resumoNumero, { color: tema.texto }]}>{alertasAltos}</Text>
          <Text style={[styles.resumoTexto, { color: tema.textoSecundario }]}>Alto risco</Text>
        </View>

        <View style={[styles.resumoCard, { backgroundColor: tema.card }]}>
          <Text style={[styles.resumoNumero, { color: tema.texto }]}>{alertasMedios}</Text>
          <Text style={[styles.resumoTexto, { color: tema.textoSecundario }]}>Risco médio</Text>
        </View>
      </View>

      <View style={styles.filtros}>
        {["Todos", "Alto", "Médio"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.filtroBotao,
              { backgroundColor: filtro === item ? tema.destaque : tema.card },
            ]}
            onPress={() => setFiltro(item)}
          >
            <Text
              style={[
                styles.filtroTexto,
                { color: filtro === item ? "#FFFFFF" : tema.textoSecundario },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {alertasFiltrados.map((alerta) => (
        <View key={alerta.id} style={[styles.card, { backgroundColor: tema.card }]}>
          <View style={styles.cardTopo}>
            <View style={styles.tituloComIcone}>
              <View style={[styles.iconeBox, { backgroundColor: tema.fundo }]}>
                {renderIcone(alerta.tipo)}
              </View>

              <Text style={[styles.regiao, { color: tema.texto }]}>
                {alerta.regiao}
              </Text>
            </View>

            <Text
              style={[
                styles.badge,
                alerta.risco === "Alto" ? styles.badgeAlto : styles.badgeMedio,
              ]}
            >
              {alerta.risco}
            </Text>
          </View>

          <Text style={[styles.tipo, { color: tema.textoSecundario }]}>
            Tipo: {alerta.tipo}
          </Text>

          <Text style={[styles.recomendacao, { color: tema.textoSecundario }]}>
            {alerta.recomendacao}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  resumoContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  resumoCard: {
    flex: 1,
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
  },
  resumoNumero: {
    fontSize: 26,
    fontWeight: "bold",
  },
  resumoTexto: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  filtros: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  filtroBotao: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  filtroTexto: {
    fontWeight: "bold",
  },
  card: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  cardTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  tituloComIcone: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  iconeBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  regiao: {
    fontSize: 17,
    fontWeight: "bold",
    flex: 1,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: "#0B1026",
    fontWeight: "bold",
    overflow: "hidden",
  },
  badgeAlto: {
    backgroundColor: "#F87171",
  },
  badgeMedio: {
    backgroundColor: "#FACC15",
  },
  tipo: {
    marginTop: 12,
  },
  recomendacao: {
    marginTop: 10,
    lineHeight: 20,
  },
});