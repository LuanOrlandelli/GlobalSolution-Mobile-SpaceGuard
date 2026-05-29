import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MapPin, ShieldAlert, FileText, Trash2 } from "lucide-react-native";

import Header from "../src/components/Header";
import { useApp } from "../src/context/AppContext";

export default function Registrar() {
  const [regiao, setRegiao] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ocorrencias, setOcorrencias] = useState([]);

  const { tema } = useApp();

  useEffect(() => {
    carregarOcorrencias();
  }, []);

  async function carregarOcorrencias() {
    const dadosSalvos = await AsyncStorage.getItem("@spaceguard_ocorrencias");
    if (dadosSalvos) {
      setOcorrencias(JSON.parse(dadosSalvos));
    }
  }

  async function salvarOcorrencia() {
    if (!regiao.trim() || !tipo.trim() || !descricao.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos antes de salvar.");
      return;
    }

    const novaOcorrencia = {
      id: Date.now(),
      regiao,
      tipo,
      descricao,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    const novaLista = [novaOcorrencia, ...ocorrencias];

    await AsyncStorage.setItem(
      "@spaceguard_ocorrencias",
      JSON.stringify(novaLista)
    );

    setOcorrencias(novaLista);
    setRegiao("");
    setTipo("");
    setDescricao("");

    Alert.alert("Sucesso", "Ocorrência registrada com sucesso!");
  }

  async function limparHistorico() {
    await AsyncStorage.removeItem("@spaceguard_ocorrencias");
    setOcorrencias([]);
    Alert.alert("Histórico limpo", "Todas as ocorrências foram removidas.");
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      showsVerticalScrollIndicator={false}
    >
      <Header
        titulo="Registrar Ocorrência"
        subtitulo="Cadastre uma observação ambiental para complementar os dados monitorados."
      />

      <View style={[styles.inputBox, { backgroundColor: tema.card }]}>
        <MapPin color={tema.textoSecundario} size={21} />
        <TextInput
          style={[styles.input, { color: tema.texto }]}
          placeholder="Região monitorada"
          placeholderTextColor={tema.textoSecundario}
          value={regiao}
          onChangeText={setRegiao}
        />
      </View>

      <View style={[styles.inputBox, { backgroundColor: tema.card }]}>
        <ShieldAlert color={tema.textoSecundario} size={21} />
        <TextInput
          style={[styles.input, { color: tema.texto }]}
          placeholder="Tipo de risco: queimada, seca, enchente..."
          placeholderTextColor={tema.textoSecundario}
          value={tipo}
          onChangeText={setTipo}
        />
      </View>

      <View style={[styles.inputBoxArea, { backgroundColor: tema.card }]}>
        <FileText color={tema.textoSecundario} size={21} />
        <TextInput
          style={[styles.inputArea, { color: tema.texto }]}
          placeholder="Descrição da ocorrência"
          placeholderTextColor={tema.textoSecundario}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
      </View>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: tema.destaque }]}
        onPress={salvarOcorrencia}
      >
        <Text style={styles.botaoTexto}>Salvar Ocorrência</Text>
      </TouchableOpacity>

      <View style={styles.historicoTopo}>
        <Text style={[styles.historicoTitulo, { color: tema.texto }]}>
          Histórico local
        </Text>

        {ocorrencias.length > 0 && (
          <TouchableOpacity style={styles.limparBotao} onPress={limparHistorico}>
            <Trash2 color="#F87171" size={17} />
            <Text style={styles.limparTexto}>Limpar</Text>
          </TouchableOpacity>
        )}
      </View>

      {ocorrencias.length === 0 ? (
        <Text style={[styles.vazio, { color: tema.textoSecundario }]}>
          Nenhuma ocorrência registrada ainda.
        </Text>
      ) : (
        ocorrencias.map((item) => (
          <View
            key={item.id}
            style={[styles.cardHistorico, { backgroundColor: tema.card }]}
          >
            <Text style={[styles.cardRegiao, { color: tema.texto }]}>
              {item.regiao}
            </Text>
            <Text style={styles.cardTipo}>Tipo: {item.tipo}</Text>
            <Text
              style={[styles.cardDescricao, { color: tema.textoSecundario }]}
            >
              {item.descricao}
            </Text>
            <Text style={[styles.cardData, { color: tema.textoSecundario }]}>
              Registrado em: {item.data}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputBox: {
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputBoxArea: {
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 15,
  },
  inputArea: {
    flex: 1,
    minHeight: 110,
    fontSize: 15,
    textAlignVertical: "top",
  },
  botao: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  historicoTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 14,
  },
  historicoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  limparBotao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  limparTexto: {
    color: "#F87171",
    fontWeight: "bold",
  },
  vazio: {
    fontSize: 14,
    marginBottom: 30,
  },
  cardHistorico: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardRegiao: {
    fontSize: 17,
    fontWeight: "bold",
  },
  cardTipo: {
    color: "#FFCF5C",
    marginTop: 8,
    fontWeight: "bold",
  },
  cardDescricao: {
    marginTop: 8,
    lineHeight: 20,
  },
  cardData: {
    marginTop: 10,
    fontSize: 12,
  },
});