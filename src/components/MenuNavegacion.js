import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const MenuNavegacion = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="home" size={26} color="#B8860B" /> 
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Ionicons name="search" size={26} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="heart-outline" size={26} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="person-outline" size={26} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 85, // Un poco más alto para dispositivos modernos
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingBottom: 15, // Espacio para el "home indicator" del iPhone
    elevation: 20, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    padding: 10,
  }
});

export default MenuNavegacion;