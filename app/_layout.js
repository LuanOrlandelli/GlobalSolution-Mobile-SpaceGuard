import { Stack } from "expo-router";
import { AppProvider } from "../src/context/AppContext";

export default function Layout() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0B1026" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "SpaceGuard" }} />
        <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />
        <Stack.Screen name="alertas" options={{ title: "Alertas" }} />
        <Stack.Screen name="registrar" options={{ title: "Registrar Ocorrência" }} />
        <Stack.Screen name="monitoramento" options={{ title: "Centro de Monitoramento" }} />
        <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
        <Stack.Screen name="espacial" options={{ title: "Central Espacial" }} />
        <Stack.Screen name="sobre" options={{ title: "Sobre a Solução" }} />
      </Stack>
    </AppProvider>
  );
}