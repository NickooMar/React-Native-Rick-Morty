import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import jupiterCardImage from "../../assets/images/JupiterCardImage.png";

const LocationItem = ({ location }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardIDTag}>{location?.id}</Text>
      <Image style={styles.cardContentImage} source={jupiterCardImage} />
      <Text style={styles.cardStatusTag}>{location?.type}</Text>
      <View style={{ width: "60%", overflow: "hidden", height: 120 }}>
        <Text style={styles.cardContentTitle}>{location?.name}</Text>
        <Text style={{ ...styles.cardContentParagraph, color: "#bfc9ca" }}>
          Dimension:
          <Text style={{ color: "white" }}> {location?.dimension}</Text>
        </Text>
      </View>
    </View>
  );
};

export default LocationItem;

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
  cardStatusTag: {
    position: "absolute",
    padding: 2,
    margin: 5,
    color: "white",
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "#2ca935",
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
