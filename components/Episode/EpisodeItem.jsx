import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import episodeCardImage from "../../assets/images/homescreenEpisodes.png";

const EpisodeItem = ({ episode }) => {
  console.log(episode.air_date);

  return (
    <View style={styles.card}>
      <Text style={styles.cardIDTag}>{episode?.id}</Text>
      <Image style={styles.cardContentImage} source={episodeCardImage} />
      <Text style={styles.cardEpisodeTag}>{episode?.episode}</Text>
      <View style={{ width: "60%", overflow: "hidden", height: 120 }}>
        <Text style={styles.cardContentTitle}>{episode?.name}</Text>
        <Text style={{ ...styles.cardContentParagraph, color: "#bfc9ca" }}>
          First On Air:
          <Text style={{ color: "white" }}> {episode?.air_date}</Text>
        </Text>
      </View>
    </View>
  );
};

export default EpisodeItem;

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
  cardEpisodeTag: {
    position: "absolute",
    padding: 2,
    margin: 5,
    color: "white",
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "#222831",
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
