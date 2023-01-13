import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import backgroundImage from "../assets/background.png";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Rick And Morty API</Text>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.characterButton, backgroundColor: '#B8C480'}}
            onPress={() => navigation.navigate('Characters')}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.characterButton, backgroundColor: '#922D50'}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.characterButton, backgroundColor: '#3C1B43'}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Characters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.4,
    width: "100%",
    height: "90%",
  },
  text: {
    color: "black",
    marginTop: 15,
    fontSize: 36,
    textAlign: "center",
    opacity: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  characterButton: {
    padding: 20,
    borderRadius: 5,
  },
});
