import { useState } from "react";
import { View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { List } from "../../components/List";

import { styles } from "./styles";

export type Task = {
  id: number;
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [newTaskValue, setNewTaskValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function removeTask(taskIdToBeRemoved: number) {
    const filteredTasks = tasks.filter(task => task.id !== taskIdToBeRemoved);

    setTasks(filteredTasks);
  }

  function toggleTaskCheckbox(taskIdToBeChecked: number) {
    const immutableTasks = tasks.map(task => ({ ...task }));

    const taskToBeUpdated = immutableTasks.find(task => task.id === taskIdToBeChecked);

    if (taskToBeUpdated) {
      taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked;
      setTasks(immutableTasks);
    }
  }

  function addTask() {
    if (!newTaskValue) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: newTaskValue,
      isChecked: false
    }

    setNewTaskValue('');
    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.mainContent}>
        <View style={styles.inputContainer}>
          <Input
            value={newTaskValue}
            onChangeText={setNewTaskValue}
            onSubmitEditing={addTask}
          />
          <Button onPress={addTask}>
            <Feather name="plus-circle" size={16} color="#F2F2F2" />
          </Button>
        </View>
        <List
          data={tasks}
          removeTask={removeTask}
          toggleTaskCheckbox={toggleTaskCheckbox}
        />
      </View>
    </View>
  );
}