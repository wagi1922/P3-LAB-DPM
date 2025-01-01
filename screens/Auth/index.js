import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from '@rneui/themed';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lakukan validasi login di sini
    if (email === 'test@gmail.com' && password === 'test123') {
      navigation.navigate('Home');
    } else {
      // Jika login gagal, tampilkan pesan error
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  const signUp = () => {
    navigation.navigate('SingUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="LOG IN"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonbox}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={handleLogin}/>
      <Text style={{ marginTop: 10, left: 100}}>Don't have an account?</Text>
      <Button
        title="Sing UP"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonbox}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={signUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonStyle:{
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonbox:{
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    left: 25  }
});

export default LoginScreen;
