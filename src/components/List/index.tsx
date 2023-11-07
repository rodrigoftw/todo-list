import { FlatList, View } from 'react-native';

import { Task } from '../../screens/Home';
import { ListHeader } from './ListHeader';
import { TaskItem } from './TaskItem';
import { EmptyListComponent } from './EmptyListComponent';

import { styles } from './styles';

type ListProps = {
  data: Task[];
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheckbox: (taskIdToBeChecked: number) => void;
}

export function List({ data, removeTask, toggleTaskCheckbox }: ListProps) {
  return (
    <View style={styles.container}>
      <ListHeader data={data} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            removeTask={removeTask}
            toggleTaskCheckbox={toggleTaskCheckbox}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListComponent />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}