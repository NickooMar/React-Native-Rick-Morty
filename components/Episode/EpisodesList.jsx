import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useState, useEffect, Fragment } from "react";

import { getEpisodes } from "../../api/api";

import { useFonts } from "expo-font";
import EpisodeItem from "./EpisodeItem";

const EpisodesList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    SourceSansPro_Black: require("../../assets/fonts/SourceSansPro-Black.ttf"),
    SourceSansPro_BlackItalic: require("../../assets/fonts/SourceSansPro-BlackItalic.ttf"),
    SourceSansPro_Bold: require("../../assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansPro_BoldItalic: require("../../assets/fonts/SourceSansPro-BoldItalic.ttf"),
    SourceSansPro_ExtraLight: require("../../assets/fonts/SourceSansPro-ExtraLight.ttf"),
    SourceSansPro_Italic: require("../../assets/fonts/SourceSansPro-Italic.ttf"),
    SourceSansPro_Light: require("../../assets/fonts/SourceSansPro-Light.ttf"),
    SourceSansPro_Regular: require("../../assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansPro_SemiBold: require("../../assets/fonts/SourceSansPro-SemiBold.ttf"),
  });

  useEffect(() => {
    setIsLoading(true);
    getEpisodes(page).then((res) => {
      setData(data.concat(res?.results));
      setIsLoading(false);
      setPage(page + 1);
    });
  }, []);

  const handleLoadMore = async () => {
    await getEpisodes(page).then((res) => {
      setData(data.concat(res?.results));
      setIsLoading(false);
      setPage(page + 1);
    });
    setIsLoading(true);
  };

  const renderFooter = () => {
    isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <Fragment>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <EpisodeItem episode={item} />}
          keyExtractor={(_, index) => index.toString()}
          removeClippedSubviews={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter}
        />
      </View>
    </Fragment>
  );
};

export default EpisodesList;

const styles = StyleSheet.create({
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
  backgroundContainer: {
    width: "100%",
    height: 50,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInBackgroundImage: {
    color: "white",
    fontSize: 24,
    fontFamily: "SourceSansPro_SemiBold",
    textAlign: "center",
    marginTop: "2%",
  },
});
