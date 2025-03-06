import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AuthScreen({ navigation }) {
  const handleAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentica para continuar',
    });
  
    if (result.success) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Autenticación fallida.');
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
