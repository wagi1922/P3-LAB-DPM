import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MenghitungSkor from '../../src/skor'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Penghitungan Skor</Text>
        <View style={styles.box}>
          <View style={styles.skorBox}>
            <Text style={styles.name}>Team A</Text>
          </View>
          <View style={styles.skorBox}>
            <Text style={styles.name}>Team B</Text>
          </View>
        </View>
        <MenghitungSkor/>
      </View>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
  },
  textBox :{
    bottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box:{
    gap: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 50
  },
  skorBox:{
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20
  },
  name:{
    fontSize: 20,
    fontWeight: '600'
  }
});

export default HomeScreen;
