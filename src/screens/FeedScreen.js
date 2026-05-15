import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text } from 'react-native';
import TarjetaCandidato from '../components/TarjetaCandidato';
import MenuNavegacion from '../components/MenuNavegacion'; 
import { POLITICOS } from '../data/datos';

const { height, width } = Dimensions.get('window');

const FeedScreen = () => {
  // Estado para saber qué sección mostrar
  const [seccionActual, setSeccionActual] = useState('reels');

  // Función para renderizar el contenido según el menú
  const renderContenido = () => {
    switch (seccionActual) {
      case 'reels':
        return (
          <FlatList
            data={POLITICOS}
            renderItem={({ item }) => <TarjetaCandidato item={item} />}
            keyExtractor={item => item.id}
            pagingEnabled
            vertical
            showsVerticalScrollIndicator={false}
            snapToInterval={height}
            decelerationRate="fast"
          />
        );
      case 'search':
        return <View style={styles.center}><Text style={styles.text}>Buscador de Candidatos</Text></View>;
      case 'heart':
        return <View style={styles.center}><Text style={styles.text}>Mis Favoritos</Text></View>;
      case 'profile':
        return <View style={styles.center}><Text style={styles.text}>Mi Perfil</Text></View>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainWrapper}>
      {/* Contenido Principal */}
      <View style={styles.contentArea}>
        {renderContenido()}
      </View>
      
      {/* Menú Inferior - Pasamos la función para cambiar de estado */}
      <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentArea: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});

export default FeedScreen;