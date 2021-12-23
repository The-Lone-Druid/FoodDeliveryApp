import { View, Text, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import Constant from 'expo-constants';

export default function App() {
  return (
    <View style={styles.statusBarAlignment}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBarAlignment: {
    marginTop: Constant.statusBarHeight,
    backgroundColor: '#eee',
    flex: 1
  }
})