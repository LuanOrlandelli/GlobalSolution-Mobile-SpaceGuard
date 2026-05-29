import { Dimensions, View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useApp } from "../context/AppContext";

const screenWidth = Dimensions.get("window").width;

export default function GraficoPizza({ titulo, dados }) {
  const { tema } = useApp();

  const dadosComTema = dados.map((item) => ({
    ...item,
    legendFontColor: tema.texto,
  }));

  return (
    <View style={[styles.container, { backgroundColor: tema.card }]}>
      <Text style={[styles.titulo, { color: tema.texto }]}>{titulo}</Text>

      <PieChart
        data={dadosComTema}
        width={screenWidth - 80}
        height={220}
        chartConfig={{
          color: () => tema.texto,
          labelColor: () => tema.texto,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="8"
        absolute
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
});