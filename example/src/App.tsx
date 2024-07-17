import { StyleSheet, View } from 'react-native';
import { HelloWorld } from 'react-native-qrscanner';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
