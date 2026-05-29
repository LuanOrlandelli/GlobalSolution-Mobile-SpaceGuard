import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import { User, Moon, Database } from "lucide-react-native";

import Header from "../src/components/Header";
import { useApp } from "../src/context/AppContext";

export default function Perfil() {
  const { usuario, setUsuario, temaEscuro, setTemaEscuro, tema } = useApp();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <Header
        titulo="Perfil"
        subtitulo="Configurações gerais da solução SpaceGuard."
      />

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconeBox, { backgroundColor: tema.fundo }]}>
            <User color={tema.destaque} size={22} />
          </View>

          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Nome da equipe ou usuário
          </Text>
        </View>

        <TextInput
          style={[
            styles.input,
            {
              color: tema.texto,
              borderColor: tema.textoSecundario,
            },
          ]}
          placeholder="Digite o nome da equipe"
          placeholderTextColor={tema.textoSecundario}
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>

      <View style={[styles.cardLinha, { backgroundColor: tema.card }]}>
        <View style={styles.cardHeaderLinha}>
          <View style={[styles.iconeBox, { backgroundColor: tema.fundo }]}>
            <Moon color={tema.destaque} size={22} />
          </View>

          <View>
            <Text style={[styles.label, { color: tema.textoSecundario }]}>
              Tema escuro
            </Text>
            <Text style={[styles.descricao, { color: tema.textoSecundario }]}>
              Interface inspirada em sistemas espaciais.
            </Text>
          </View>
        </View>

        <Switch value={temaEscuro} onValueChange={setTemaEscuro} />
      </View>

      <View style={[styles.card, { backgroundColor: tema.card }]}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconeBox, { backgroundColor: tema.fundo }]}>
            <Database color={tema.destaque} size={22} />
          </View>

          <Text style={[styles.label, { color: tema.textoSecundario }]}>
            Context API + AsyncStorage
          </Text>
        </View>

        <Text style={[styles.valor, { color: tema.texto }]}>
          Usuário e tema são compartilhados globalmente entre as telas e
          persistidos localmente no dispositivo.
        </Text>
      </View>
    </View>
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
  },
  cardLinha: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  cardHeaderLinha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  iconeBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 15,
  },
  valor: {
    fontSize: 15,
    lineHeight: 21,
  },
  descricao: {
    marginTop: 6,
    maxWidth: 190,
  },
});