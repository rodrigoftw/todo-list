import { Image, View, Text } from "react-native";
import ClipboardImage from "../../../assets/Clipboard.png";
import { styles } from "./styles";

export function EmptyListComponent() {
  return (
    <View style={styles.container}>
      <Image source={ClipboardImage} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
