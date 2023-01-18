import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { getCharacter } from "../api/api";

const CharacterDetail = ({ route }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchSingleCharacter = async () => {
      const response = await getCharacter(route.params);
      setCharacter(response);
    };

    fetchSingleCharacter();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textName}>{character?.name}</Text>
      </View>
      <View>
        <Image
          source={{ uri: character?.image }}
          style={styles.characterImage}
        />
        <Text
          style={[
            character?.status?.includes("Alive")
              ? styles.cardStatusTagAlive
              : styles.cardStatusTagDeath,
          ]}
        >
          {character?.status}
        </Text>
      </View>
      <View style={styles.cardTextMargin}>
        <Text style={styles.textParagraph}>
          <Text style={styles.textCharacterProperties}>Description: </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          expedita, vel mollitia nostrum, beatae quaerat fugit maiores quam
          magnam aspernatur, ullam excepturi ea sed
        </Text>
        <Text style={styles.textParagraph}>
          <Text style={styles.textCharacterProperties}>Gender: </Text>
          {character?.gender}
        </Text>
        <Text style={styles.textParagraph}>
          <Text style={styles.textCharacterProperties}>Location: </Text>
          {character?.location.name}
        </Text>
        <Text style={styles.textParagraph}>
          <Text style={styles.textCharacterProperties}>Origin: </Text>
          {character?.origin.name}
        </Text>
      </View>
    </>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontSize: 36,
  },
  textParagraph: {
    fontSize: 16,
    marginTop: 5,
  },
  textCharacterProperties: {
    color: "#777",
  },
  characterImage: {
    position: "relative",
    width: "90%",
    height: 400,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  cardStatusTagAlive: {
    position: "absolute",
    padding: 8,
    marginTop: 10,
    marginLeft: 20,
    color: "white",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#2ca935",
  },
  cardStatusTagDeath: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 20,
    padding: 2,
    margin: 5,
    color: "white",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#ea4747",
  },

  cardTextMargin: {
    marginLeft: 5,
  },
});
