import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Task } from '../../../screens/Home';

import { styles } from "./styles";

type TaskItemProps = {
  item: Task;
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheckbox: (taskIdToBeChecked: number) => void;
}

export function TaskItem({ item, removeTask, toggleTaskCheckbox }: TaskItemProps) {
  function handleRemoveTask() {
    removeTask(item.id);
  }

  function handleToggleTaskCheck() {
    toggleTaskCheckbox(item.id);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggleTaskCheck}>
      <View style={styles.infoContainer}>
        {item.isChecked ? (
          <View style={{ ...styles.checkbox, ...styles.checked }}>
            <Feather name="check" color="#F2F2F2" />
          </View>
        ) : (
          <View style={{ ...styles.checkbox, ...styles.unchecked }} />
        )}
        <Text style={
          item.isChecked
            ? { ...styles.text, ...styles.textChecked }
            : { ...styles.text, ...styles.textUnchecked }}
        >
          {item.text}
        </Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={handleRemoveTask}>
        <Feather name="trash-2" size={16} color="#808080" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}