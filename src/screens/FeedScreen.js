import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';

// COMPONENTES
import HeaderSuperior from '../components/HeaderSuperior'; 
import MenuNavegacion from '../components/MenuNavegacion'; 
import TarjetaCandidato from '../components/TarjetaCandidato'; 
import PantallaInicioContent from '../components/PantallaInicioContent'; 

// DATOS
import { POLITICOS } from '../data/datos';

const { height } = Dimensions.get('window');

const FeedScreen = () => {
  const [seccionActual, setSeccionActual] = useState('home');

  // Componente interno para las tarjetas de Settings
  const SettingCard = ({ titulo }) => (
    <TouchableOpacity 
      style={styles.settingCard}
      onPress={() => console.log(`Navegando a: ${titulo}`)} 
    >
      <Text style={styles.settingText}>{titulo}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const renderContenido = () => {
    switch (seccionActual) {
      case 'home':
        // Pantalla Principal (Dashboard)
        return <PantallaInicioContent />;
        
      case 'reels':
        // Pantalla de Reels (Políticos)
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
        // Pantalla Favoritos
        return (
          <View style={styles.center}>
            <Text style={styles.titleText}>❤️ Mis Favoritos</Text>
          </View>
        );
        
      case 'profile':
        // Pantalla Configuración (La que me pediste)
        return (
          <ScrollView style={styles.settingsContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.headerTitle}>Configuración</Text>
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
      {/* HEADER FIJO */}
      <HeaderSuperior />

      {/* CONTENIDO CAMBIANTE */}
      <View style={styles.contentArea}>
        {renderContenido()}
      </View>
      
      {/* MENÚ INFERIOR FIJO */}
      <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Fondo claro base
  },
  contentArea: {
    flex: 1,
    marginTop: 90, // Deja espacio exacto para el HeaderSuperior
    marginBottom: 75, // Deja espacio exacto para el MenuNavegacion
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
  
  // --- ESTILOS DE LA SECCIÓN DE CONFIGURACIÓN ---
  settingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15, // Un poco de espacio arriba
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#1a1a1a',
  },
  settingCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombreado para look premium
    shadowColor: '#000000',
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