import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Header from "../src/components/Header";
import StatusBadge from "../src/components/StatusBadge";
import { useApp } from "../src/context/AppContext";

const dadosFallbackNASA = {
  title: "Imagem Astronômica Simulada",
  date: "2020-07-20",
  explanation:
    "Quando a API pública da NASA atinge o limite de requisições, o SpaceGuard utiliza um conteúdo reserva para manter a experiência funcionando. Esse fallback simula a integração com dados espaciais sem quebrar a tela do usuário.",
  media_type: "image",
  url: "https://images-assets.nasa.gov/image/PIA12235/PIA12235~medium.jpg",
};

export default function Espacial() {
  const { tema } = useApp();

  const [dadosNASA, setDadosNASA] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [usandoFallback, setUsandoFallback] = useState(false);

  useEffect(() => {
    carregarDadosNASA();
  }, []);

  async function carregarDadosNASA() {
    try {
      const resposta = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );

      const dados = await resposta.json();

      console.log("STATUS:", resposta.status);
      console.log("RESPOSTA NASA:", dados);

      if (dados?.error || dados?.code || !dados?.url) {
        setDadosNASA(dadosFallbackNASA);
        setUsandoFallback(true);
        return;
      }

      setDadosNASA(dados);
      setUsandoFallback(false);
    } catch (error) {
      console.log("Erro ao carregar dados da NASA:", error);
      setDadosNASA(dadosFallbackNASA);
      setUsandoFallback(true);
    } finally {
      setCarregando(false);
      setRefreshing(false);
    }
  }

    async function atualizarTela() {
      setRefreshing(true);
      await carregarDadosNASA();
    }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={atualizarTela}
          tintColor={tema.destaque}
        />
      }
    >
      <Header
        titulo="Central Espacial"
        subtitulo="Integração com a API pública da NASA para aproximar o app do ecossistema espacial real."
      />

      {carregando ? (
        <ActivityIndicator size="large" color={tema.destaque} />
      ) : (
        <View style={[styles.card, { backgroundColor: tema.card }]}>
          {usandoFallback ? (
            <StatusBadge
              tipo="alerta"
              texto="Fallback ativado: API temporariamente limitada"
            />
          ) : (
            <StatusBadge tipo="sucesso" texto="API NASA conectada com sucesso" />
          )}

          {dadosNASA?.media_type === "image" ? (
            <Image source={{ uri: dadosNASA.url }} style={styles.imagem} />
          ) : (
            <View style={[styles.videoBox, { backgroundColor: tema.fundo }]}>
              <Text style={[styles.videoTexto, { color: tema.textoSecundario }]}>
                O conteúdo retornado pela API não é uma imagem.
              </Text>
            </View>
          )}

          <Text style={[styles.titulo, { color: tema.texto }]}>
            {dadosNASA?.title || "Imagem astronômica do dia"}
          </Text>

          <Text style={[styles.data, { color: tema.textoSecundario }]}>
            Data: {dadosNASA?.date}
          </Text>

          <Text style={[styles.descricao, { color: tema.textoSecundario }]}>
            {dadosNASA?.explanation}
          </Text>
        </View>
      )}
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
    padding: 16,
    marginBottom: 30,
  },
  imagem: {
    width: "100%",
    height: 240,
    borderRadius: 14,
    marginBottom: 16,
  },
  videoBox: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  videoTexto: {
    fontSize: 14,
    lineHeight: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  data: {
    fontSize: 14,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 22,
  },
});