import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeScanner from './components/Barcode-scanner';


export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>My head hurts </Text>
      <StatusBar style="auto" />
      <BarcodeScanner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
