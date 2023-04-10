import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Stars from "./Stars";

export default function Item({ item, index }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemName}>
        <Text style={styles.breed}>{item.breed}</Text>
        <Stars rating={5} />
      </View>

      <ScrollView style={styles.traitsList}>
        <View style={styles.traitItem}>
          <Text>trait</Text>
          <Stars rating={5} />
        </View>
        <View style={styles.traitItem}>
          <Text>trait</Text>
          <Stars rating={5} />
        </View>
        <View style={styles.traitItem}>
          <Text>trait</Text>
          <Stars rating={5} />
        </View>
        <View style={styles.traitItem}>
          <Text>trait</Text>
          <Stars rating={5} />
        </View>
      </ScrollView>
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

  itemName: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  breed: {
    fontSize: 18,
    fontWeight: 500,
  },

  traitsList: {
    marginLeft: 40,
    paddingTop: 6,
  },

  traitItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
});
