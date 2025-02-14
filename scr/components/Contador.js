import { StyleSheet, Text, View } from "react-native";

export default function Contador({ name, value }) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          name === "Criadas" ? styles.color1 : styles.color2,
          styles.text,
        ]}
      >
        {name}
      </Text>
      <View style={styles.numberCounter}>
        <Text style={styles.number}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 36,
  },
  text: {
    fontWeight: "700",
    fontSize: 14,
    marginRight: 8,
  },
  color1: {
    color: "#4EA8DE",
  },
  color2: {
    color: "#8284FA",
  },
  numberContainer: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    borderRadius: 999,
  },
  number: {
    fontWeight: "700",
    color: "#D9D9D9",
  },
});
