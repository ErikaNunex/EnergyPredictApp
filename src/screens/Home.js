import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Energy Predict</Text>

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
    alignItems: "center",
    marginTop: 10,
  },
  Initbutton: {
    backgroundColor: "#F27405",

    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  initButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 150,
  },
});
