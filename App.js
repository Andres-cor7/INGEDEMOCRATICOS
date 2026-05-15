import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      {/* Esto hace que la barra de hora y batería sea clara sobre el fondo oscuro */}
      <StatusBar barStyle="light-content" /> 
      <FeedScreen />
    </SafeAreaView>
  );
}