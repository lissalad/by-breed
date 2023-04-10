import { StyleSheet, Text, View } from "react-native";

export default function Stars({ rating }) {
  const stars = Array(rating).fill("⭐️");

  return (
    <View style={styles.stars}>
      {stars.map((star, index) => (
        <Text key={index}>{star}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    display: "flex",
    flexDirection: "row",
  },
});
