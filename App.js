import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// CORRECCIÓN DE RUTAS DE PANTALLAS (Línea 7 y 8)
import FeedScreen from './src/screens/FeedScreen';
import DetallePoliticoScreen from './src/screens/DetallePoliticoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" /> 
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen 
              name="Feed" 
              component={FeedScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="DetallePolitico" 
              component={DetallePoliticoScreen} 
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});