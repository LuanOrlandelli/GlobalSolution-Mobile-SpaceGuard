import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Satellite, Globe2, ShieldAlert, Leaf } from "lucide-react-native";

import Header from "../src/components/Header";
import { useApp } from "../src/context/AppContext";

export default function Sobre() {
  const { tema } = useApp();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
    >
      <Header
        titulo="Sobre a Solução"
        subtitulo="Entenda como o SpaceGuard conecta dados espaciais, prevenção ambiental e impacto social."
      />

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <Satellite color={tema.destaque} size={28} />
        <Text style={[styles.titulo, { color: tema.texto }]}>
          Indústria Espacial
        </Text>
        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          O SpaceGuard simula o uso de dados de satélites para acompanhar áreas
          vulneráveis e apoiar decisões rápidas diante de riscos ambientais.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <ShieldAlert color={tema.destaque} size={28} />
        <Text style={[styles.titulo, { color: tema.texto }]}>
          Problema
        </Text>
        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          Muitos desastres ambientais são identificados tarde, quando os impactos
          já atingiram comunidades, plantações, ecossistemas e estruturas urbanas.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <Globe2 color={tema.destaque} size={28} />
        <Text style={[styles.titulo, { color: tema.texto }]}>
          Solução Proposta
        </Text>
        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          O app centraliza indicadores, alertas, gráficos e registros locais,
          funcionando como um dashboard mobile para monitoramento ambiental.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <Leaf color={tema.destaque} size={28} />
        <Text style={[styles.titulo, { color: tema.texto }]}>
          ODS Relacionados
        </Text>
        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          A solução se conecta principalmente ao ODS 13 — Ação Contra a Mudança
          Global do Clima — e ao ODS 15 — Vida Terrestre.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <Text style={[styles.titulo, { color: tema.texto }]}>
          Tecnologias Utilizadas
        </Text>
        <Text style={[styles.texto, { color: tema.textoSecundario }]}>
          React Native, Expo Router, Context API, AsyncStorage, gráficos com
          react-native-chart-kit, integração com API pública da NASA e componentes
          reutilizáveis.
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
  card: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    gap: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 14,
    lineHeight: 21,
  },
});