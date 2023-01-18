import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const CharacterItem = ({ character }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.cardIDTag}>{character?.id}</Text>
      <Image
        style={styles.cardContentImage}
        source={{ uri: character?.image }}
      />
      <Text
        style={[
          character.status.includes("Alive")
            ? styles.cardStatusTagAlive
            : styles.cardStatusTagDeath,
        ]}
      >
        {character?.status}
      </Text>
      <View style={{ width: "60%", overflow: "hidden" }}>
        <Text style={styles.cardContentTitle}>{character?.name}</Text>
        <Text style={{ ...styles.cardContentParagraph, color: "#bfc9ca" }}>
          Specie:<Text style={{ color: "white" }}> {character?.species}</Text>
        </Text>
        <Text style={{ ...styles.cardContentParagraph, color: "#bfc9ca" }}>
          Last Seen:
          <Text style={{ color: "white" }}> {character?.location?.name}</Text>
        </Text>
        <TouchableOpacity
          style={{
            ...styles.cardContentButton,
            backgroundColor: "#B7E4F9FF",
          }}
          onPress={() => navigation.navigate("CharacterDetail", character.id)}
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
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#222831",
    borderRadius: 20,
    marginVertical: 10,
    position: "relative",
  },
  cardIDTag: {
    position: "absolute",
    right: 10,
    top: 5,
    fontSize: 12,
    color: "white",
    padding: 4,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardContentImage: {
    position: "relative",
    width: "40%",
    height: undefined,
    borderRadius: 20,
  },
  cardStatusTagAlive: {
    position: "absolute",
    padding: 2,
    margin: 5,
    color: "white",
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "#2ca935",
  },
  cardStatusTagDeath: {
    position: "absolute",
    padding: 2,
    margin: 5,
    color: "white",
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "#ea4747",
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
    fontSize: 16,
    marginTop: 10,
  },
});
