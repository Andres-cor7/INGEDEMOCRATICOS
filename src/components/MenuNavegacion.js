import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const MenuNavegacion = ({ setSeccion, seccionActual }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSeccion('reels')} style={styles.button}>
        <Ionicons 
          name={seccionActual === 'reels' ? "home" : "home-outline"} 
          size={26} 
          color={seccionActual === 'reels' ? "#B8860B" : "#666"} 
        /> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setSeccion('search')} style={styles.button}>
        <Ionicons 
          name="search" 
          size={26} 
          color={seccionActual === 'search' ? "#B8860B" : "#666"} 
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSeccion('heart')} style={styles.button}>
        <Ionicons 
          name={seccionActual === 'heart' ? "heart" : "heart-outline"} 
          size={26} 
          color={seccionActual === 'heart' ? "#B8860B" : "#666"} 
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSeccion('profile')} style={styles.button}>
        <Ionicons 
          name={seccionActual === 'profile' ? "person" : "person-outline"} 
          size={26} 
          color={seccionActual === 'profile' ? "#B8860B" : "#666"} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 70, 
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 9999, // FORZAR que esté arriba
    elevation: 25, 
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
});

export default MenuNavegacion;