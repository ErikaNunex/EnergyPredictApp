import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Calc from "../screens/Calc";
import History from "../screens/History";
import Help from "../screens/Help";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Cálculo"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Histórico") iconName = "time-outline";
          else if (route.name === "Cálculo") iconName = "calculator-outline";
          else if (route.name === "Ajuda") iconName = "help-circle-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Cálculo" component={Calc} />
      <Tab.Screen name="Histórico" component={History} />
      <Tab.Screen name="Ajuda" component={Help} />
    </Tab.Navigator>
  );
}
