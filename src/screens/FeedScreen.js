import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text } from 'react-native';
import TarjetaCandidato from '../components/TarjetaCandidato';
import MenuNavegacion from '../components/MenuNavegacion'; 
import { POLITICOS } from '../data/datos';

const { height } = Dimensions.get('window');

const FeedScreen = () => {
  // La app inicia en Home (primera sección)
  const [seccionActual, setSeccionActual] = useState('home');

  const renderContenido = () => {
    switch (seccionActual) {
      case 'home':
        return (
          <View style={styles.center}>
            <Text style={styles.text}>🏠 Bienvenido a la App</Text>
            <Text style={styles.subText}>Selecciona el icono de Play para ver candidatos</Text>
          </View>
        );
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
        return (
          <View style={styles.center}>
            <Text style={styles.text}>🔍 Buscador de Candidatos</Text>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.center}>
            <Text style={styles.text}>👤 Mi Perfil</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentArea}>
        {renderContenido()}
      </View>
      
      {/* Pasamos el estado al menú para que sepa cuál está activo */}
      <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentArea: {
    flex: 1,
    marginBottom: 70, // Espacio para que el menú no tape contenido
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    color: '#888',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  }
});

export default FeedScreen;