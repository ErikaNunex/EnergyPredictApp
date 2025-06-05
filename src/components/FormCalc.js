import { View, Text, TextInput, StyleSheet } from "react-native";

export default function FormCalc({
  bill1,
  setBill1,
  bill2,
  setBill2,
  bill3,
  setBill3,
  kwh,
  setKwh,
  power,
  setPower,
  hours,
  setHours,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha seus dados</Text>

      <Text>Últimas 3 contas (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Conta 1"
        keyboardType="numeric"
        onChangeText={setBill1}
        value={bill1}
      />
      <TextInput
        style={styles.input}
        placeholder="Conta 2"
        keyboardType="numeric"
        onChangeText={setBill2}
        value={bill2}
      />
      <TextInput
        style={styles.input}
        placeholder="Conta 3"
        keyboardType="numeric"
        onChangeText={setBill3}
        value={bill3}
      />

      <Text>Valor do kWh (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 0,85"
        keyboardType="numeric"
        onChangeText={setKwh}
        value={kwh}
      />

      <Text>Potência do aparelho (Watts)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1000"
        keyboardType="numeric"
        onChangeText={setPower}
        value={power}
      />

      <Text>Uso diário (Horas)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2"
        keyboardType="numeric"
        onChangeText={setHours}
        value={hours}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 10, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
});
