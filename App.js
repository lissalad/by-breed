import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { dogs } from "./breeds";
import Item from "./components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* ---------- SCROLL VIEW ------------ */}
        {/* <ScrollView>
          {dogs.map((item, index) => {
            return <Item title={`${index} ${item.breed}`} />;
          })}
        </ScrollView> */}

        {/* ------- FLAT LIST ----------- */}
        <FlatList
          data={dogs}
          renderItem={({ item, index }) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={(item) => item.index}
        />
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
});
