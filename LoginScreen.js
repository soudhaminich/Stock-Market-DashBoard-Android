import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For demonstration, directly navigate to the StockList screen after "login"
    navigation.replace('StockList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={text => setUsername(text)} value={username}
      />
      <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: windowWidth * 0.1, // Adjust padding based on window width
  },
  title: {
    fontSize: windowWidth * 0.08, // Responsive font size
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.05, // Adjust margin based on window height
    color: 'navy',
  },
  input: {
    width: '100%',
    height: windowHeight * 0.06, // Responsive input height based on window height
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: windowHeight * 0.02, // Adjust margin based on window height
    paddingHorizontal: windowWidth * 0.03, // Adjust padding based on window width
  },
});

export default LoginScreen;