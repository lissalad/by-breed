import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Stars from "./Stars";
import { getAverageDogRating } from "../breeds";

export default function Item({ item, index }) {
  const [showTraits, setShowTraits] = useState(false);
  const averageRating = getAverageDogRating(index);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => setShowTraits(!showTraits)}>
        <View style={styles.row}>
          <Text style={styles.breedName}>{item.breed}</Text>
          <Stars rating={averageRating} />
        </View>
      </TouchableOpacity>

      {showTraits && (
        <ScrollView style={styles.traitsList}>
          {Object.keys(item).map((key) => {
            if (key !== "breed") {
              return (
                <View key={key} style={styles.traitItem}>
                  <Text>{key}</Text>
                  <Stars rating={item[key]} />
                </View>
              );
            }
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#9999",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },

  breedName: {
    fontSize: 20,
    fontWeight: 600,
    // width: "100%",
  },

  traitsList: {
    marginLeft: 10,
    paddingTop: 8,
    width: "100%",
  },

  traitItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,
  },
});
