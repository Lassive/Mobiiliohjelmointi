import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  const showAlert = () => {
    Alert.alert('Moi!', 'Syötit tekstin: ' + message);
  }

  return (
    <View style={styles.container}>
      <Text>Result: </Text>

      <TextInput style={{ 
        width: 200, 
        borderColor: 'black', 
        borderWidth: 1}} 
        onChangeText={text => setMessage(text)}
      />
      

      <TextInput style={{ 
        width: 200, 
        borderColor: 'black', 
        borderWidth: 1}} 
        onChangeText={text => setMessage(text2)}
      />

      <Button title="Press me" onPress={showAlert} color='black' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
