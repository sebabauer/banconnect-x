import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AuthScreen({ navigation }) {
  const handleAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Error", "La autenticación biométrica no está disponible.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentica para continuar',
    });

    if (result.success) {
      Alert.alert('Éxito', 'Autenticado correctamente.');
      // navegación al Home que crearemos luego
    } else {
      Alert.alert('Error', 'No autenticado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar identidad</Text>
      <Button title="Autenticar con Face ID / Touch ID" onPress={handleAuth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
});
