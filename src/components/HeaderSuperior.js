import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HeaderSuperior = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu-outline" size={32} color="#B8860B" />
      </TouchableOpacity>
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
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 1,
    zIndex: 1000,
    elevation: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconButton: {
    padding: 5,
  }
});

export default HeaderSuperior;