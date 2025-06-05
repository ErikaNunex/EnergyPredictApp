import { View, Text, Button, StyleSheet } from "react-native";

export default function Result({ route, navigation }) {
  const { result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>

      <Text>Média das 3 últimas contas: R$ {result.avgBill}</Text>
      <Text>Consumo mensal do aparelho: R$ {result.deviceCost}</Text>
      <Text>Próxima conta estimada: R$ {result.estimatedBill}</Text>

      <Button
        title="Voltar para o início"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
