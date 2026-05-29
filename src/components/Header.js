import { Text, View, StyleSheet } from "react-native";
import { useApp } from "../context/AppContext";

export default function Header({ titulo, subtitulo }) {
  const { tema } = useApp();

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: tema.texto }]}>{titulo}</Text>
      {subtitulo && (
        <Text style={[styles.subtitulo, { color: tema.textoSecundario }]}>
          {subtitulo}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
  },
});