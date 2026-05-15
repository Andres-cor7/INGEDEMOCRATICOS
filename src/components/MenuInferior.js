import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuInferior = () => {
  return (
    <View style={styles.container}>
      {/* Sustituye estos nombres por los que tengas en assets */}
      <TouchableOpacity><Image source={require('../../assets/home.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity><Image source={require('../../assets/reels.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity><Image source={require('../../assets/fav.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity><Image source={require('../../assets/perfil_icon.png')} style={styles.icon} /></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Esto lo deja fijo sobre el scroll
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  icon: { width: 30, height: 30, tintColor: '#B8860B' } // Color dorado de tu diseño
});

export default MenuInferior;