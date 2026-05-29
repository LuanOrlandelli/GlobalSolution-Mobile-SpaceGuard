import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { CloudSun, Thermometer, Droplets, Wind } from "lucide-react-native";

import Header from "../src/components/Header";
import StatusBadge from "../src/components/StatusBadge";
import { useApp } from "../src/context/AppContext";

const dadosFallbackClima = {
  temperature_2m: 28,
  relative_humidity_2m: 42,
  wind_speed_10m: 12,
};

export default function Espacial() {
  const { tema } = useApp();

  const [dadosClima, setDadosClima] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [usandoFallback, setUsandoFallback] = useState(false);

  useEffect(() => {
    carregarDadosClima();
  }, []);

  async function carregarDadosClima() {
    try {
      const resposta = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
      );

      const dados = await resposta.json();

      if (!dados?.current) {
        setDadosClima(dadosFallbackClima);
        setUsandoFallback(true);
        return;
      }

      setDadosClima(dados.current);
      setUsandoFallback(false);
    } catch (error) {
      console.log("Erro ao carregar dados climáticos:", error);
      setDadosClima(dadosFallbackClima);
      setUsandoFallback(true);
    } finally {
      setCarregando(false);
      setRefreshing(false);
    }
  }

  async function atualizarTela() {
    setRefreshing(true);
    await carregarDadosClima();
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
        titulo="Dados Climáticos"
        subtitulo="Integração com API externa para acompanhamento de condições ambientais em tempo real."
      />

      {carregando ? (
        <ActivityIndicator size="large" color={tema.destaque} />
      ) : (
        <View style={[styles.card, { backgroundColor: tema.card }]}>
          {usandoFallback ? (
            <StatusBadge
              tipo="alerta"
              texto="Fallback ativado: API temporariamente indisponível"
            />
          ) : (
            <StatusBadge
              tipo="sucesso"
              texto="API climática conectada com sucesso"
            />
          )}

          <View style={[styles.iconePrincipal, { backgroundColor: tema.fundo }]}>
            <CloudSun color={tema.destaque} size={42} />
          </View>

          <Text style={[styles.titulo, { color: tema.texto }]}>
            Monitoramento Climático Atual
          </Text>

          <Text style={[styles.descricao, { color: tema.textoSecundario }]}>
            Dados obtidos por API externa para apoiar a análise ambiental e a
            prevenção de riscos relacionados ao clima.
          </Text>

          <View style={styles.grid}>
            <View style={[styles.item, { backgroundColor: tema.fundo }]}>
              <Thermometer color="#F87171" size={26} />
              <Text style={[styles.valor, { color: tema.texto }]}>
                {dadosClima?.temperature_2m}°C
              </Text>
              <Text style={[styles.label, { color: tema.textoSecundario }]}>
                Temperatura
              </Text>
            </View>

            <View style={[styles.item, { backgroundColor: tema.fundo }]}>
              <Droplets color="#38BDF8" size={26} />
              <Text style={[styles.valor, { color: tema.texto }]}>
                {dadosClima?.relative_humidity_2m}%
              </Text>
              <Text style={[styles.label, { color: tema.textoSecundario }]}>
                Umidade
              </Text>
            </View>

            <View style={[styles.item, { backgroundColor: tema.fundo }]}>
              <Wind color="#A78BFA" size={26} />
              <Text style={[styles.valor, { color: tema.texto }]}>
                {dadosClima?.wind_speed_10m} km/h
              </Text>
              <Text style={[styles.label, { color: tema.textoSecundario }]}>
                Vento
              </Text>
            </View>
          </View>
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
    padding: 18,
    marginBottom: 30,
  },
  iconePrincipal: {
    width: 74,
    height: 74,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  grid: {
    gap: 12,
  },
  item: {
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  valor: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  label: {
    fontSize: 13,
  },
});