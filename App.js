import { Text, TouchableOpacity } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Characters from "./screens/Characters";
import CharacterDetail from "./components/Character/CharacterDetail";

// Fonts
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_Black: require("./assets/fonts/SourceSansPro-Black.ttf"),
    SourceSansPro_BlackItalic: require("./assets/fonts/SourceSansPro-BlackItalic.ttf"),
    SourceSansPro_Bold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansPro_BoldItalic: require("./assets/fonts/SourceSansPro-BoldItalic.ttf"),
    SourceSansPro_ExtraLight: require("./assets/fonts/SourceSansPro-ExtraLight.ttf"),
    SourceSansPro_Italic: require("./assets/fonts/SourceSansPro-Italic.ttf"),
    SourceSansPro_Light: require("./assets/fonts/SourceSansPro-Light.ttf"),
    SourceSansPro_Regular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansPro_SemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "The Rick and Morty API",
            headerStyle: { backgroundColor: "#2f80ed" },
            headerTitleStyle: {
              color: "#F0EDEE",
              fontSize: 26,
              alignSelf: "center",
              fontFamily: "SourceSansPro_SemiBold",
            },
            // headerRight: () => (
            //   <TouchableOpacity
            //     onPress={() => navigation.navigate("Characters")}
            //   >
            //     <Text style={{ color: "#fff", fontSize: 16 }}>
            //       👤Characters
            //     </Text>
            //   </TouchableOpacity>
            // ),
          })}
        />
        <Stack.Screen
          name="Characters"
          component={Characters}
          options={() => ({
            title: "Characters",
            headerStyle: { backgroundColor: "#2f80ed" },
            headerTitleStyle: {
              color: "#F0EDEE",
              fontSize: 26,
              alignSelf: "center",
              fontFamily: "SourceSansPro_SemiBold",
            },
          })}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={() => ({
            title: "Character Detail",
            headerStyle: { backgroundColor: "#2f80ed" },
            headerTitleStyle: {
              color: "#F0EDEE",
              fontSize: 26,
              alignSelf: "center",
              fontFamily: "SourceSansPro_SemiBold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
