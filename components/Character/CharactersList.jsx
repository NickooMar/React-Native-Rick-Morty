import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect, Fragment } from "react";

import CharacterItem from "./CharacterItem";
import { getCharacters } from "../../api/api";

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson?.results));
        setIsLoading(false);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  const handleLoadMore = async () => {
    getData();
    setIsLoading(true);
  };

  const renderFooter = () =>
    isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;

  return (
    <Fragment>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <CharacterItem character={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          removeClippedSubviews={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter}
        />
      </View>
    </Fragment>
  );
};

export default CharactersList;

const styles = StyleSheet.create({
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
});
