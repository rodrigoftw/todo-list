import { Image, View } from "react-native";
import LogoImage from '../../assets/Logo.png';
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={LogoImage} />
    </View>
  );
}