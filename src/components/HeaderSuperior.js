import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const HeaderSuperior = () => {
  return (
    <View style={styles.container}>
      {/* Icono de menú (hamburguesa) a la izquierda */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu-outline" size={32} color="#B8860B" />
      </TouchableOpacity>
      
      {/* Icono de perfil a la derecha */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="person-circle-outline" size={32} color="#B8860B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0,
    width: width,
    height: 90, 
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingTop: 40, 
    zIndex: 1000, 
    
    // MAGIA: Cero líneas duras, solo sombra difuminada
    borderBottomWidth: 0, // Quitamos la raya que estorbaba
    elevation: 8, // Sombra suave en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08, // Sombra muy tenue y elegante (8% de opacidad)
    shadowRadius: 5,
  },
  iconButton: {
    padding: 5, 
  }
});

export default HeaderSuperior;