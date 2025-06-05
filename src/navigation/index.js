import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Calc from "../screens/Calc";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cálculo" component={Calc} />
        <Stack.Screen name="Resultado" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
