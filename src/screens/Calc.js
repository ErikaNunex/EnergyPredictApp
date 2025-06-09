import { useState } from "react";
import { ScrollView, Button, Alert, StyleSheet } from "react-native";
import { calcNewDeviceCost } from "../services/calcService";
import FormCalc from "../components/FormCalc";
import ResultCard from "../components/ResultCard";

export default function Calc() {
  const [bill1, setBill1] = useState("");
  const [bill2, setBill2] = useState("");
  const [bill3, setBill3] = useState("");
  const [kwh, setKwh] = useState("");
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");

  const [result, setResult] = useState(null);

  const parseNumber = (value) => Number(value.replace(",", "."));

  const handleCalc = () => {
    if (!bill1 || !bill2 || !bill3 || !kwh || !power || !hours) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    const calcResult = calcNewDeviceCost({
      bills: [parseNumber(bill1), parseNumber(bill2), parseNumber(bill3)],
      kwh: parseNumber(kwh),
      power: parseNumber(power),
      hoursPerDay: parseNumber(hours),
    });

    setResult(calcResult);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormCalc
        bill1={bill1}
        setBill1={setBill1}
        bill2={bill2}
        setBill2={setBill2}
        bill3={bill3}
        setBill3={setBill3}
        kwh={kwh}
        setKwh={setKwh}
        power={power}
        setPower={setPower}
        hours={hours}
        setHours={setHours}
      />

      <ResultCard result={result} />

      <Button title="Calcular" onPress={handleCalc} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 10, paddingTop: 70 },
});
