import { Dimensions, View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useApp } from "../context/AppContext";

const screenWidth = Dimensions.get("window").width;

export default function GraficoLinha({ titulo, dados }) {
  const { tema } = useApp();

  return (
    <View style={[styles.container, { backgroundColor: tema.card }]}>
      <Text style={[styles.titulo, { color: tema.texto }]}>{titulo}</Text>

      <LineChart
        data={dados}
        width={screenWidth - 80}
        height={220}
        yAxisSuffix="%"
        chartConfig={{
          backgroundGradientFrom: tema.card,
          backgroundGradientTo: tema.card,
          decimalPlaces: 0,
          color: () => tema.texto,
          labelColor: () => tema.textoSecundario,
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: tema.destaque,
          },
        }}
        bezier
        style={styles.grafico}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  grafico: {
    borderRadius: 16,
    alignSelf: "center",
  },
});