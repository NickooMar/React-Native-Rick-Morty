import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.cardImage} />
      <Text style={styles.cardStatusTag}>{character.status}</Text>
      <View style={styles.cardTextMargin}>
        <Text style={styles.cardTitle}>{character.name}</Text>
        <Text style={styles.cardParagraph}>
          <Text style={styles.cardCharacterProperties}>Gender: </Text>
          {character.gender}
        </Text>
        <Text style={styles.cardParagraph}>
          <Text style={styles.cardCharacterProperties}>Location: </Text>
          {character.location.name}
        </Text>
      </View>
      <TouchableOpacity style={styles.cardDetailButton}>
        <Text style={styles.cardDetailText}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  card: {
    width: "42%",
    height: "90%",
    margin: 20,
    borderWidth: 2,
    borderColor: "#86BBD8",
    borderRadius: 10,
  },
  cardImage: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  cardStatusTag: {
    position: "absolute",
    padding: 2,
    margin: 5,
    backgroundColor: "red",
    color: "white",
    borderRadius: 5,
    fontSize: 14,
  },
  cardTextMargin: {
    marginTop: 5,
    marginLeft: 5,
  },
  cardTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  cardParagraph: {
    fontSize: 12,
  },
  cardCharacterProperties: {
    color: "#777",
  },
  cardDetailButton: {
    padding: 5,
    backgroundColor: "#33658A",
    borderRadius: 5,
    margin: 5,
  },
  cardDetailText: {
    color: "#fff",
    textAlign: 'center'
  },
});
