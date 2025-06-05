import { View, Text, StyleSheet } from "react-native";

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Resultado</Text>
        <Text>Preencha os dados e clique em Calcular</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resultado</Text>
      <Text>Média das 3 contas: R$ {result.avgBill}</Text>
      <Text>Consumo mensal do aparelho: R$ {result.deviceCost}</Text>
      <Text>Próxima conta estimada: R$ {result.estimatedBill}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
