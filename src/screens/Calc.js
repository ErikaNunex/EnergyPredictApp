import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { calcNewDeviceCost } from "../services/calcService";

export default function Calc({ navigation }) {
  const [bill1, setBill1] = useState("");
  const [bill2, setBill2] = useState("");
  const [bill3, setBill3] = useState("");
  const [kwh, setKwh] = useState("");
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");

  const parseNumber = (value) => Number(value.replace(",", "."));

  const handleCalc = () => {
    if (!bill1 || !bill2 || !bill3 || !kwh || !power || !hours) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    const result = calcNewDeviceCost({
      bills: [parseNumber(bill1), parseNumber(bill2), parseNumber(bill3)],
      kwh: parseNumber(kwh),
      power: parseNumber(power),
      hoursPerDay: parseNumber(hours),
    });

    navigation.navigate("Resultado", { result });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        placeholder="Ex: 0.85"
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

      <Button title="Calcular" onPress={handleCalc} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
});
