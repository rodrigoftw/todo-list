import { Text, View } from "react-native";

import { styles } from "./styles";

type CounterProps = {
  description: string;
  value: number;
  isFinished: boolean;
}

export function Counter({ description, value, isFinished }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text style={
        isFinished
          ? { ...styles.description, ...styles.descriptionFinished }
          : { ...styles.description, ...styles.descriptionCreated }
      }>
        {description}
      </Text>

      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  )
}