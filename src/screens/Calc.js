import { useState } from "react";
import {
  ScrollView,
  Text,
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { calcNewDeviceCost } from "../services/calcService";
import FormCalc from "../components/FormCalc";
import ResultCard from "../components/ResultCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Calc() {
  const [bill1, setBill1] = useState("");
  const [bill2, setBill2] = useState("");
  const [bill3, setBill3] = useState("");
  const [kwh, setKwh] = useState("");
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");
  const [title, setTitle] = useState("");

  const [result, setResult] = useState(null);

  const parseNumber = (value) => Number(value.replace(",", "."));
  const saveToHistory = async (title, result) => {
    try {
      const previous = await AsyncStorage.getItem("history");
      const parsed = previous ? JSON.parse(previous) : [];

      const updated = [
        ...parsed,
        {
          title,
          timestamp: new Date().toISOString(),
          ...result,
        },
      ];

      await AsyncStorage.setItem("history", JSON.stringify(updated));
    } catch (err) {
      console.error("Erro ao salvar histórico:", err);
    }
  };

  const handleCalc = async () => {
    if (!title || !bill1 || !bill2 || !bill3 || !kwh || !power || !hours) {
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
    await saveToHistory(title, calcResult);
  };
  const handleReset = () => {
    setBill1("");
    setBill2("");
    setBill3("");
    setKwh("");
    setPower("");
    setHours("");
    setTitle("");
    setResult(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormCalc
        title={title}
        setTitle={setTitle}
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

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.calcButtonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calcButton} onPress={handleCalc}>
          <Text style={styles.calcButtonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 10, paddingTop: 70 },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-around",
    marginTop: 10,
  },
  calcButton: {
    backgroundColor: "#F27405",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  calcButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#592202",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
});
