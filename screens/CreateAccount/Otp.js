import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OtpScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState('');
  const { confirmation } = route.params; // Mendapatkan objek confirmation dari halaman SignUp

  const handleVerifyOtp = async () => {
    if (otp.length === 6) {
      try {
        // Verifikasi OTP dengan Firebase
        await confirmation.confirm(otp);
        Alert.alert('Verifikasi Berhasil', 'Selamat datang!');
        navigation.navigate('Home'); // Navigasi ke halaman Home
      } catch (error) {
        Alert.alert('Verifikasi Gagal', 'Kode OTP salah atau kadaluwarsa.');
      }
    } else {
      Alert.alert('Error', 'Masukkan 6 digit kode OTP!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan Kode OTP</Text>
      <Text style={styles.subtitle}>
        Kode telah dikirimkan ke nomor telepon Anda
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan kode OTP"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verifikasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
