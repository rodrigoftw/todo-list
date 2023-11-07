import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  children: ReactNode,
  onPress: () => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.addTaskButton}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}