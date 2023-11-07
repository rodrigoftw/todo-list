import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: '#333333',
    borderTopWidth: 1
  },
  title: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    marginTop: 16,
  },
  subtitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20
  }
});