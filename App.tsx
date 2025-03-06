import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [rutEmpresa, setRutEmpresa] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.31.36:8000/api/registro/', {
        usuario: {
          rut,
          email,
          password,
        },
        empresa: {
          nombre_empresa: nombreEmpresa,
          rut_empresa: rutEmpresa,
        }
      });
      Alert.alert('Éxito', response.data.mensaje);
    } catch (error: any) {
      Alert.alert('Error', error.response.data ? JSON.stringify(error.response.data) : error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Empresa</Text>

      <TextInput
        style={styles.input}
        placeholder="RUT Usuario"
        value={rut}
        onChangeText={setRut}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Usuario"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre Empresa"
        value={nombreEmpresa}
        onChangeText={setNombreEmpresa}
      />

      <TextInput
        style={styles.input}
        placeholder="RUT Empresa"
        value={rutEmpresa}
        onChangeText={setRutEmpresa}
      />

      <Button title="Registrar Empresa" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});
