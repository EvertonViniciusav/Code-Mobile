import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Trash from "../../assets/trash.png";
import { useState } from "react";

export default function Tarefa({ name, onRemove, onChecked }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[styles.container, isChecked && styles.finalizada]}>
      <BouncyCheckbox
        size={24}
        fillColor="#5E60CE"
        innerIconStyle={isChecked ? styles.iconeStyle2 : styles.iconeStyle}
        onPress={(isChecked) => {
          onChecked(isChecked);
          setIsChecked(isChecked);
        }}
      />

      <Text style={isChecked ? styles.texto2 : styles.texto}>{name}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={Trash} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333333",
    shadowOffset: { width: 2, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  finalizada: {
    opacity: 0.6,
  },
  texto: {
    color: "#F2F2F2",
  },
  texto2: {
    color: "#F2F2F2",
    textDecorationLine: "line-through",
  },
  iconeStyle: {
    borderColor: "#4EA8DE",
    borderWidth: 2,
  },
  iconeStyle2: {
    borderWidth: 0,
  },
});
