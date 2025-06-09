import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function FormCalc({
  title,
  setTitle,
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
  const navigation = useNavigation();

  const goToHelp = () => {
    navigation.navigate("Ajuda");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha seus dados</Text>

      <Text>Título da simulação</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Geladeira nova"
        onChangeText={setTitle}
        value={title}
      />
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

      <View style={styles.labelRow}>
        <Text>Valor do kWh (R$)</Text>
        <TouchableOpacity onPress={goToHelp} style={styles.helpIcon}>
          <Ionicons name="help-circle-outline" size={18} color="#3B82F6" />
        </TouchableOpacity>
      </View>
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
  helpIcon: {
    paddingHorizontal: 4,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
