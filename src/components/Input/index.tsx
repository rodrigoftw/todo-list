import { Dispatch, SetStateAction, useState } from "react";
import { TextInput } from "react-native";
import { styles } from './styles';

type InputProps = {
  value: string,
  onChangeText: Dispatch<SetStateAction<string>>;
  onSubmitEditing: () => void;
}

export function Input({ value, onChangeText, onSubmitEditing }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <TextInput
      style={
        isFocused ? { ...styles.input, ...styles.isFocused } : styles.input
      }
      value={value}
      onChangeText={onChangeText}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onSubmitEditing={onSubmitEditing}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      keyboardAppearance="default"
    />
  );
}