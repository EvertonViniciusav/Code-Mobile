import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddTarefa({ onPress, onChange, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicionar tarefa"
        placeholderTextColor="#808080"
        style={styles.campoEntrada}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <View style={styles.iconeBotao}>
          <Text style={styles.textoBotao}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  campoEntrada: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 6,
    marginRight: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    color: "#F2F2F2",
    fontSize: 16,
  },
  focusOutline: {
    borderColor: "#5E60CE",
  },
  botao: {
    width: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  iconeBotao: {
    width: 18,
    height: 18,
    borderColor: "#F2F2F2",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  textoBotao: {
    lineHeight: 16,
    color: "#F2F2F2",
  },
});
