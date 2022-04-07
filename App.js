import { View, Text, ScrollView, StyleSheet } from "react-native";
import Game from './Components/Game'

export default function App() {
  return (
    <View style={styles.app}>
        <Game/>
    </View>

  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"lightgray"
  }
})