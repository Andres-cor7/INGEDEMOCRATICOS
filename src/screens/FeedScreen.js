import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import TarjetaCandidato from '../components/TarjetaCandidato';
import MenuNavegacion from '../components/MenuNavegacion'; 
import { POLITICOS } from '../data/datos';

const { height, width } = Dimensions.get('window');

const FeedScreen = () => {
  const [seccionActual, setSeccionActual] = useState('home');

  // Componente interno para las tarjetas de Settings
  const SettingCard = ({ titulo }) => (
    <TouchableOpacity 
      style={styles.settingCard}
      onPress={() => console.log(`Navegando a: ${titulo}`)} // Aquí irá la navegación futura
    >
      <Text style={styles.settingText}>{titulo}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const renderContenido = () => {
    switch (seccionActual) {
      case 'home':
        return (
          <View style={styles.center}>
            <Text style={styles.titleText}>🏠 Bienvenido</Text>
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
      case 'heart':
        return (
          <View style={styles.center}>
            <Text style={styles.titleText}>❤️ Mis Favoritos</Text>
          </View>
        );
      case 'profile':
        return (
          <ScrollView style={styles.settingsContainer}>
            <Text style={styles.headerTitle}>Configuración</Text>
            {/* Las 5 tarjetas que pediste */}
            <SettingCard titulo="Ubicación" />
            <SettingCard titulo="Accesibilidad" />
            <SettingCard titulo="Ruben & Sheinbawm forever ❤️" />
            <SettingCard titulo="Soporte" />
            <SettingCard titulo="Acerca de nosotros" />
          </ScrollView>
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
      <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Un gris muy claro para que resalten las tarjetas blancas
  },
  contentArea: {
    flex: 1,
    marginBottom: 75,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  // ESTILOS DE SETTINGS
  settingsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#1a1a1a',
  },
  settingCard: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombreado ligero
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 22,
    color: '#CCC',
  }
});

export default FeedScreen;