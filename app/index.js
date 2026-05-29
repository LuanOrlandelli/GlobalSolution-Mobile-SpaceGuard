import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Activity } from "lucide-react-native";
import {
  BarChart3,
  Bell,
  ClipboardPlus,
  User,
  Rocket,
} from "lucide-react-native";

import Header from "../src/components/Header";
import { useApp } from "../src/context/AppContext";

export default function Home() {
  const router = useRouter();
  const { tema } = useApp();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <Header
        titulo="SpaceGuard"
        subtitulo="Monitoramento ambiental com dados espaciais para prevenção de riscos climáticos e desastres naturais."
      />

      <Text style={[styles.texto, { color: tema.textoSecundario }]}>
        O SpaceGuard simula o uso de dados coletados por satélites para acompanhar regiões de risco,
        identificar alertas ambientais e apoiar decisões preventivas.
      </Text>

      <TouchableOpacity
        style={[styles.botaoPrincipal, { backgroundColor: tema.destaque }]}
        onPress={() => router.push("/dashboard")}
      >
        <BarChart3 color="#FFFFFF" size={22} />
        <Text style={styles.botaoPrincipalTexto}>Acessar Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/alertas")}
      >
        <Bell color={tema.texto} size={21} />
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Ver Alertas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/registrar")}
      >
        <ClipboardPlus color={tema.texto} size={21} />
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Registrar Ocorrência
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/espacial")}
      >
        <Rocket color={tema.texto} size={21} />
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Central Espacial
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/monitoramento")}
      >
        <Activity color={tema.texto} size={21} />
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Centro de Monitoramento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/perfil")}
      >
        <User color={tema.texto} size={21} />
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botaoSecundario, { backgroundColor: tema.card }]}
        onPress={() => router.push("/sobre")}
      >
        <Text style={[styles.botaoSecundarioTexto, { color: tema.texto }]}>
          Sobre a Solução
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  botaoPrincipal: {
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    flexDirection: "row",
    gap: 10,
  },
  botaoPrincipalTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  botaoSecundario: {
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    flexDirection: "row",
    gap: 10,
  },
  botaoSecundarioTexto: {
    fontWeight: "bold",
    fontSize: 15,
  },
});