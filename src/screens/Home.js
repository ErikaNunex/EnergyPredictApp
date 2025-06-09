import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Energy Predict App ⚡</Text>
      {/* <Button
        title="Iniciar simulação."
        onPress={() => navigation.navigate("Main")}
      /> */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.Initbutton}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.initButtonText}>Iniciar simulação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-around",
  },
  Initbutton: {
    backgroundColor: "#F27405",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  initButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
