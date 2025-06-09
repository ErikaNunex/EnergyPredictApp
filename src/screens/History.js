import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function History() {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    try {
      const data = await AsyncStorage.getItem("history");
      if (data) {
        const parsed = JSON.parse(data);
        setHistory(parsed.reverse());
      }
    } catch (err) {
      console.error("Erro ao carregar histórico:", err);
    }
  };
  const removeItem = async (timestampToRemove) => {
    try {
      const filtered = history.filter(
        (item) => item.timestamp !== timestampToRemove
      );
      await AsyncStorage.setItem(
        "history",
        JSON.stringify([...filtered].reverse())
      );
      setHistory(filtered);
    } catch (err) {
      console.error("Erro ao remover item:", err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico de Cálculos</Text>

      {history.length === 0 ? (
        <Text style={styles.empty}>Nenhum cálculo salvo.</Text>
      ) : (
        history.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Remover",
                    "Deseja remover este item do histórico?",
                    [
                      { text: "Cancelar", style: "cancel" },
                      {
                        text: "Remover",
                        style: "destructive",
                        onPress: () => removeItem(item.timestamp),
                      },
                    ]
                  )
                }
              >
                <Ionicons name="trash-outline" size={24} color="#c00" />
              </TouchableOpacity>
            </View>
            <Text>Média das 3 contas: R$ {item.avgBill}</Text>
            <Text>Consumo mensal do aparelho: R$ {item.deviceCost}</Text>
            <Text>Próxima conta estimada: R$ {item.estimatedBill}</Text>
            <Text style={styles.date}>
              {new Date(item.timestamp).toLocaleDateString("pt-BR")}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
    paddingTop: 70,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  empty: {
    fontStyle: "italic",
    color: "#666",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  date: {
    marginTop: 8,
    color: "#888",
    fontSize: 12,
  },
});
