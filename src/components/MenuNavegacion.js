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
    left: 0, // Aseguramos que empiece desde el borde izquierdo
    right: 0, // Y llegue hasta el derecho
    width: width,
    height: 80, 
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    
    // ESTO ES LO QUE LO HARÁ APARECER:
    zIndex: 9999, // Lo pone por encima de las tarjetas
    elevation: 25, // Máxima prioridad de sombra en Android
    
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    padding: 15, // Área de toque más amplia
  }
});
export default MenuNavegacion;