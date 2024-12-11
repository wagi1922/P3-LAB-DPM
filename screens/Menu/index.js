import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Lifecycle from './lifesycle';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [showLifecycle, setShowLifecycle] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      {setShowLifecycle && <Lifecycle/>}
      <Button title='Toggle Lifecycle Component' onPress={() => setShowLifecycle(!showLifecycle)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
