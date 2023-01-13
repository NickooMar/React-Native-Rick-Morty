import { Text, TouchableOpacity } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Characters from "./screens/Characters";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Rick And Morty API",
            headerStyle: { backgroundColor: "#B8C480" },
            headerTitleStyle: { color: "#fff" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Characters")}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>
                  👤Characters
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Characters"
          component={Characters}
          options={() => ({
            title: "Characters",
            headerStyle: { backgroundColor: "#B8C480" },
            headerTitleStyle: { color: "#fff" },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
