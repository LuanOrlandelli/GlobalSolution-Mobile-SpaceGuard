import { View, Text, StyleSheet } from "react-native";
import { CheckCircle, AlertTriangle } from "lucide-react-native";
import { useApp } from "../context/AppContext";

export default function StatusBadge({ tipo = "sucesso", texto }) {
  const { tema } = useApp();

  const sucesso = tipo === "sucesso";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: sucesso ? "#DCFCE7" : "#FEF3C7",
        },
      ]}
    >
      {sucesso ? (
        <CheckCircle color="#15803D" size={18} />
      ) : (
        <AlertTriangle color="#B45309" size={18} />
      )}

      <Text
        style={[
          styles.texto,
          {
            color: sucesso ? "#15803D" : "#B45309",
          },
        ]}
      >
        {texto}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginBottom: 14,
  },
  texto: {
    fontSize: 13,
    fontWeight: "bold",
  },
});