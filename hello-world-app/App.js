import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  Image, 
  TextInput, 
  Button} from 'react-native';

export default function App() {
  const [ input, setInput ] = useState('')
  const [ color, setColor ] = useState('red')

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1093909062448640001/P0ba1oea_400x400.jpg'}} style={styles.logo}></Image>
      
      <Text style={styles.title}>The1999</Text>
      <TextInput 
      value={input}
      onChangeText={(text) => { setInput(text) }}
      placeholder="Input Here" 
      style={styles.input}></TextInput>
      <Text style={{fontSize: 18, marginTop: 20, color: color}}>{input}</Text>
      <View style={styles.buttonLayout}>
        <Button title="Red" color="red" onPress={() => {setColor('red')}}></Button>
        <Button title="Blue" color="blue" onPress={() => {setColor('blue')}}></Button>
        <Button title="Green" color="green" onPress={() => {setColor('green')}}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {height: 40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 20,
  }
});
