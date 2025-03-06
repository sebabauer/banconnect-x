import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function HomeScreen() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');

      const response = await axios.get('http://192.168.31.36:8000/api/home/', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setData(response.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a BanConnect X</Text>
      <Text>Empresa: {data.nombre_empresa}</Text>
      <Text>RUT Empresa: {data.rut_empresa}</Text>
      <Text>Saldo Disponible: ${data.saldo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
