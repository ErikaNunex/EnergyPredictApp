import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Energy Predict App ⚡</Text>
      <Button
        title="Iniciar cálculo"
        onPress={() => navigation.navigate("Cálculo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
