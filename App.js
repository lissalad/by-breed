import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { dogs } from "./breeds";
import Item from "./components/Item";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView
          style={styles.keyboardAvoiding}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* ---------- SCROLL VIEW ------------ */}
          {/* <ScrollView>
          {dogs.map((item, index) => {
            return <Item title={`${index} ${item.breed}`} />;
          })}
        </ScrollView> */}

          {/* ------- FLAT LIST ----------- */}
          <FlatList
            data={dogs.filter((item) =>
              item.breed.toLowerCase().includes(search.toLowerCase())
            )}
            renderItem={({ item, index }) => {
              return <Item item={item} index={index} />;
            }}
            keyExtractor={(item) => item.index}
          />
          {/* ------------------ */}

          <TextInput
            style={styles.search}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#4444",
  },
  keyboardAvoiding: {
    flex: 1,
  },
});
