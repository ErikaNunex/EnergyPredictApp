import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Help({ navigation }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggle = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (index === 1) setOpen1(!open1);
    if (index === 2) setOpen2(!open2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.titlePage}>Como posso te ajudar?</Text>

        <Pressable style={styles.cardHeader} onPress={() => toggle(1)}>
          <Text style={styles.cardTitle}>
            Como descobrir a tarifa da minha conta de energia
          </Text>
          <Ionicons
            name={open1 ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </Pressable>
        {open1 && (
          <View style={styles.cardContent}>
            <Text style={styles.title}>Como encontrar o valor do kWh?</Text>
            <Text style={styles.text}>
              Você encontra o valor do kWh na sua conta de energia. Procure por
              campos como:
              {"\n"}- Tarifa de energia (R$/kWh)
              {"\n"}- Energia consumida
              {"\n"}- Valor por kWh
              {"\n\n"}Normalmente está próximo ao consumo ou vem destacado em
              tabela.
            </Text>
          </View>
        )}
        <Pressable style={styles.cardHeader} onPress={() => toggle(2)}>
          <Text style={styles.cardTitle}>
            Onde ver a potência do novo aparelho
          </Text>
          <Ionicons
            name={open2 ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </Pressable>
        {open2 && (
          <View style={styles.cardContent}>
            <Text style={styles.title}>
              Onde encontrar a potência do aparelho?
            </Text>
            <Text style={styles.text}>
              A potência do aparelho geralmente está em:
              {"\n"}- A descrição do produto no site da loja
              {"\n"}- Etiquetas coladas no produto
              {"\n"}- Embalagem (caixa) do produto
              {"\n"}- Manual de instruções
              {"\n\n"}Procure por algo como "Potência: 1000W" ou "Consumo: 1kW".
            </Text>
          </View>
        )}
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.Initbutton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.initButtonText}>Ir para o início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 70,
  },
  titlePage: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardWrapper: {
    marginBottom: 12,
  },
  cardHeader: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
  cardContent: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  Initbutton: {
    backgroundColor: "#592202",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  initButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 10,
  },
});
