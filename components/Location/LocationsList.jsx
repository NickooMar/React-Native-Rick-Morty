import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Text,
} from "react-native";
import React, { useEffect, useState, Fragment } from "react";

import { useNavigation } from "@react-navigation/native";
import { getLocations } from "../../api/api";

// Fonts
import { useFonts } from "expo-font";
import LocationItem from "./LocationItem";

const LocationsList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  console.log(data);

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
    getLocations(page).then((res) => {
      setData(data.concat(res?.results));
      setIsLoading(false);
      setPage(page + 1);
    });
  }, []);

  const handleLoadMore = async () => {
    await getLocations(page).then((res) => {
      setData(data.concat(res?.results));
      setIsLoading(false);
      setPage(page + 1);
    });
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
        <View style={styles.backgroundContainer}>
          <View style={{ backgroundColor: "#8360c3" }}>
            <Text style={styles.textInBackgroundImage}>Select a Location</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <LocationItem location={item} />}
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

export default LocationsList;

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
