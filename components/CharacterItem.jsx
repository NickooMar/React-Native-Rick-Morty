import { View, Text } from "react-native";
import React from "react";

const CharacterItem = ({ character }) => {
  console.log(character);
  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  );
};

export default CharacterItem;
