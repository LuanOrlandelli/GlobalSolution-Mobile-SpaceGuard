import { ScrollView, View, Text, StyleSheet } from "react-native";
import {
  Satellite,
  Radar,
  TriangleAlert,
  Clock3,
} from "lucide-react-native";

import Header from "../src/components/Header";
import { useApp } from "../src/context/AppContext";

export default function Monitoramento() {
  const { tema } = useApp();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
    >
      <Header
        titulo="Centro de Monitoramento"
        subtitulo="Painel operacional para acompanhamento dos dados espaciais e ambientais."
      />

      <View style={styles.grid}>
        <View style={[styles.card, { backgroundColor: tema.card }]}>
          <Satellite color={tema.destaque} size={32} />
          <Text style={[styles.numero, { color: tema.texto }]}>12</Text>
          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Satélites Monitorados
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: tema.card }]}>
          <Radar color={tema.destaque} size={32} />
          <Text style={[styles.numero, { color: tema.texto }]}>34</Text>
          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Áreas em Observação
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: tema.card }]}>
          <TriangleAlert color="#F87171" size={32} />
          <Text style={[styles.numero, { color: tema.texto }]}>8</Text>
          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Alertas Ativos
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: tema.card }]}>
          <Clock3 color="#FACC15" size={32} />
          <Text style={[styles.numero, { color: tema.texto }]}>22:15</Text>
          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Última Atualização
          </Text>
        </View>
      </View>

      <View style={[styles.cardGrande, { backgroundColor: tema.card }]}>
        <Text style={[styles.tituloSecao, { color: tema.texto }]}>
          Status Operacional
        </Text>

        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          Todos os sistemas encontram-se operacionais. Os dados ambientais estão
          sendo processados normalmente e os alertas são atualizados em tempo real
          conforme os indicadores monitorados.
        </Text>
      </View>

      <View style={[styles.cardGrande, { backgroundColor: tema.card }]}>
        <Text style={[styles.tituloSecao, { color: tema.texto }]}>
          Cobertura da Solução
        </Text>

        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          O SpaceGuard utiliza informações provenientes de satélites para apoiar
          a identificação de riscos ambientais, permitindo ações preventivas
          relacionadas a queimadas, secas, enchentes e outros eventos climáticos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    alignItems: "center",
  },
  numero: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  label: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 13,
  },
  cardGrande: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  texto: {
    lineHeight: 22,
    fontSize: 14,
  },
});