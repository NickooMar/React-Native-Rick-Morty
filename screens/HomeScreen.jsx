import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { Fragment } from "react";

import homescreenLocationsImage from "../assets/images/homescreenLocationsImage.jpg";
import homescreenEpisodesImage from "../assets/images/homescreenEpisodes.png";

import { useNavigation } from "@react-navigation/native";

// Fonts
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    SourceSansPro_Black: require("../assets/fonts/SourceSansPro-Black.ttf"),
    SourceSansPro_BlackItalic: require("../assets/fonts/SourceSansPro-BlackItalic.ttf"),
    SourceSansPro_Bold: require("../assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansPro_BoldItalic: require("../assets/fonts/SourceSansPro-BoldItalic.ttf"),
    SourceSansPro_ExtraLight: require("../assets/fonts/SourceSansPro-ExtraLight.ttf"),
    SourceSansPro_Italic: require("../assets/fonts/SourceSansPro-Italic.ttf"),
    SourceSansPro_Light: require("../assets/fonts/SourceSansPro-Light.ttf"),
    SourceSansPro_Regular: require("../assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansPro_SemiBold: require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
  });
  return (
    <Fragment>
      <View>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={require("../assets/images/Banner_background.png")}
            style={styles.backgroundImage}
          >
            <Text style={styles.textInBackgroundImage}>
              Welcome Rick And Morty Fan!
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/background.png")}
            style={styles.backgorundProfileImage}
          />
        </View>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.card}>
          <Image
            style={styles.cardContentImage}
            source={{
              uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            }}
          />
          <View style={{ width: "60%", overflow: "hidden" }}>
            <Text style={styles.cardContentTitle}>Characters</Text>
            <Text style={styles.cardContentParagraph}>
              Find over 800 characters of the serie and discover all the
              information about every single one
            </Text>
            <TouchableOpacity
              style={{
                ...styles.cardContentButton,
                backgroundColor: "#B7E4F9FF",
              }}
              onPress={() => navigation.navigate("Characters")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "SourceSansPro_Regular",
                }}
              >
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardContentImage}
            source={homescreenLocationsImage}
          />
          <View style={{ width: "60%" }}>
            <Text style={styles.cardContentTitle}>Locations</Text>
            <Text style={styles.cardContentParagraph}>
              Find over 100 planets of the serie and discover all the
              information about every single one
            </Text>
            <TouchableOpacity
              style={{
                ...styles.cardContentButton,
                backgroundColor: "#8e44ad",
              }}
              onPress={() => navigation.navigate("Locations")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "SourceSansPro_Regular",
                  color: "white",
                }}
              >
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardContentImage}
            source={homescreenEpisodesImage}
          />
          <View style={{ width: "60%", zIndex: -10 }}>
            <Text style={styles.cardContentTitle}>Episodes</Text>
            <Text style={styles.cardContentParagraph}>
              Find over 50 episodes of the serie and discover all the
              information about every single one
            </Text>
            <TouchableOpacity
              style={{
                ...styles.cardContentButton,
                backgroundColor: "#97CE4C",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "SourceSansPro_Regular",
                }}
              >
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: 205,
    position: "absolute",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  textInBackgroundImage: {
    color: "white",
    fontSize: 28,
    fontFamily: "SourceSansPro_SemiBold",
    textAlign: "center",
    marginTop: "18%",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  backgorundProfileImage: {
    width: "35%",
    height: undefined,
    aspectRatio: 1,
    zIndex: 5,
    borderRadius: 100,
    transform: [{ translateY: 200 }],
  },

  // Card Container
  contentContainer: {
    zIndex: -10,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "66.5%",
  },

  // Character, Location, Episodes CARD
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#222831",
    borderRadius: 20,
    marginVertical: 10,
  },
  cardContentImage: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20,
  },
  cardContentTitle: {
    fontFamily: "SourceSansPro_SemiBold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  cardContentButton: {
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  cardContentParagraph: {
    color: "white",
    fontFamily: "SourceSansPro_Regular",
    textAlign: "center",
    marginTop: 10,
  },
});
