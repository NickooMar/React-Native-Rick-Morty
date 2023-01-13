import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";

import CharacterItem from "./CharacterItem";

import { getCharacters } from "../api/api";

const CharactersList = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const loadCharacters = async () => {
      const fetchedCharacters = await getCharacters();
      setCharacters(fetchedCharacters.results);
    };
    loadCharacters();
  }, []);

  //   const renderItem = ({ item }) => {
  //     return <CharacterItem character={item} />;
  //   };

  return (
    <FlatList
      style={{ width: "100%" }}
      data={characters}|
      keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CharacterItem character={item} />}
    />
  );
};

export default CharactersList;
