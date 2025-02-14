import { Image, StyleSheet, Text, View, FlatList, Alert } from "react-native";
import AddTarefa from "../components/AddTarefa";
import Tarefa from "../components/Tarefa";
import { StatusBar } from "expo-status-bar";
import Icon from "../../assets/todo.png";
import Contador from "../components/Contador";
import { useState } from "react";

export default function Home() {
  const [tarefa, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  let checkedTasks = tarefa.filter(
    (tarefas) => tarefas.checked === true
  ).length;

  function handleListaTarefasAdd() {
    if (!novaTarefa.trim()) {
      Alert.alert("Campo vazio", "Digite uma tarefa antes de adicionar.");
      return;
    }

    const tarefasComMesmoNome = tarefa.find(
      (tarefa) => tarefa.name === novaTarefa
    );
    if (tarefasComMesmoNome) {
      Alert.alert("Tarefa já existe", "Já existe uma tarefa com esse nome.");
      return;
    }

    setTarefas((prevState) => [
      ...prevState,
      { name: novaTarefa, checked: false },
    ]);
    setNovaTarefa("");
  }

  function handleRemoveTarefa(name) {
    setTarefas((prevState) => prevState.filter((item) => item.name !== name));
  }

  function handleTarefaCheck(tarefa) {
    setTarefas((prevState) =>
      prevState.map((item) => {
        if (item.name === tarefa.name) {
          return tarefa;
        } else {
          return item;
        }
      })
    );
  }
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.cabecalho}>
        <Image
          source={Icon}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            borderRadius: 50,
          }}
        />
      </View>
      <View style={styles.corpo}>
        <AddTarefa
          onPress={handleListaTarefasAdd}
          onChange={setNovaTarefa}
          value={novaTarefa}
        />
        <View style={styles.corpoConteudo}>
          <View style={styles.contadoresWrapper}>
            <Contador name="Criadas" value={tarefa.length} />
            <Contador name="Concluídas" value={checkedTasks} />
          </View>
          <FlatList
            data={tarefa}
            keyExtractor={(item) => item.name}
            renderItem={(todo) => (
              <Tarefa
                key={todo.item.name}
                name={todo.item.name}
                onRemove={() => handleRemoveTarefa(todo.item.name)}
                onChecked={(isChecked) => {
                  handleTarefaCheck({
                    name: todo.item.name,
                    checked: isChecked,
                  });
                }}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    width: "100%",
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  contadoresWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  corpo: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  corpoConteudo: {
    margin: 24,
  },
});
