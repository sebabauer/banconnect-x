import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.31.36:8000/api/login/', {
        rut,
        password,
      });

      await AsyncStorage.setItem('token', response.data.access);
      Alert.alert('Éxito', 'Sesión iniciada correctamente');
      
      // Navega hacia autenticación biométrica
      navigation.navigate('AuthBiometrica');

    } catch (error: any) {
      Alert.alert('Error', 'RUT o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión BanConnect X</Text>

      <TextInput
        style={styles.input}
        placeholder="RUT"
        value={rut}
        onChangeText={setRut}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
