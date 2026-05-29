import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [usuario, setUsuarioState] = useState("Equipe SpaceGuard");
  const [temaEscuro, setTemaEscuro] = useState(true);

  useEffect(() => {
    carregarPreferencias();
  }, []);

  async function carregarPreferencias() {
    const temaSalvo = await AsyncStorage.getItem("@spaceguard_tema_escuro");
    const usuarioSalvo = await AsyncStorage.getItem("@spaceguard_usuario");

    if (temaSalvo !== null) {
      setTemaEscuro(JSON.parse(temaSalvo));
    }

    if (usuarioSalvo !== null) {
      setUsuarioState(usuarioSalvo);
    }
  }

  async function alternarTema(valor) {
    setTemaEscuro(valor);
    await AsyncStorage.setItem("@spaceguard_tema_escuro", JSON.stringify(valor));
  }

  async function setUsuario(valor) {
    setUsuarioState(valor);
    await AsyncStorage.setItem("@spaceguard_usuario", valor);
  }

  const tema = temaEscuro
    ? {
        fundo: "#0B1026",
        card: "#1A2142",
        texto: "#FFFFFF",
        textoSecundario: "#B8C1EC",
        destaque: "#4F7BFF",
      }
    : {
        fundo: "#F4F6FF",
        card: "#FFFFFF",
        texto: "#111827",
        textoSecundario: "#4B5563",
        destaque: "#2563EB",
      };

  return (
    <AppContext.Provider
      value={{
        usuario,
        setUsuario,
        temaEscuro,
        setTemaEscuro: alternarTema,
        tema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}