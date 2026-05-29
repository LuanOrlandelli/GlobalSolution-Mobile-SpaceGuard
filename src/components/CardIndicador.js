import { View, Text, StyleSheet } from "react-native";
import { Flame, Droplets, ThermometerSun } from "lucide-react-native";
import { useApp } from "../context/AppContext";

export default function CardIndicador({ titulo, valor, descricao }) {
  const { tema } = useApp();

  function renderIcone() {
    if (titulo.includes("Queimada")) {
      return <Flame color="#F87171" size={26} />;
    }

    if (titulo.includes("Umidade")) {
      return <Droplets color="#38BDF8" size={26} />;
    }

    if (titulo.includes("Temperatura")) {
      return <ThermometerSun color="#FACC15" size={26} />;
    }

    return null;
  }

  return (
    <View style={[styles.card, { backgroundColor: tema.card }]}>
      <View style={styles.topo}>
        <View>
          <Text style={[styles.titulo, { color: tema.textoSecundario }]}>
            {titulo}
          </Text>
          <Text style={[styles.valor, { color: tema.texto }]}>{valor}</Text>
        </View>

        <View style={[styles.iconeBox, { backgroundColor: tema.fundo }]}>
          {renderIcone()}
        </View>
      </View>

      <Text style={[styles.descricao, { color: tema.textoSecundario }]}>
        {descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 15,
  },
  valor: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  descricao: {
    fontSize: 13,
    lineHeight: 18,
  },
  iconeBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});