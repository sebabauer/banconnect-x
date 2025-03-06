import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import AuthScreen from './AuthScreen'; // la biometrica que ya creaste
// (HomeScreen lo crearemos en el próximo paso)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AuthBiometrica" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
