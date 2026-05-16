import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PantallaInicioContent = () => {
  const candidatosDestacados = [
    { id: '1', nombre: 'Luis Fernando', foto: require('../../assets/Dante.jpeg') },
    { id: '2', nombre: 'Claudia S.', foto: require('../../assets/Ruben.jpeg') },
    { id: '3', nombre: 'Rubén M.', foto: require('../../assets/Ruben.jpeg') }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.bienvenida}>Hola, Ciudadano</Text>
        <Text style={styles.subtitulo}>Conoce las propuestas para el ITESM y Chihuahua</Text>
      </View>

      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Busca por candidato o distrito...</Text>
      </TouchableOpacity>

      <Text style={styles.seccionTitulo}>✨ Candidatos Destacados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredList}>
        {candidatosDestacados.map(candidato => (
          <TouchableOpacity key={candidato.id} style={styles.featuredItem}>
            <Image source={candidato.foto} style={styles.featuredImage} />
            <Text style={styles.featuredName}>{candidato.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.seccionTitulo}>📅 Próximas Elecciones ITESM</Text>
      <View style={styles.electionCard}>
        <View style={styles.goldSeparator}></View>
        <View style={styles.electionInfo}>
          <Text style={styles.electionTitle}>Diputación Federal</Text>
          <Text style={styles.electionDate}>Junio 2024 · Chihuahua</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#B8860B" />
      </View>
      
      <View style={styles.electionCard}>
        <View style={styles.goldSeparator}></View>
        <View style={styles.electionInfo}>
          <Text style={styles.electionTitle}>Presidencia Municipal</Text>
          <Text style={styles.electionDate}>Junio 2024 · Cd. Chihuahua</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#B8860B" />
      </View>

      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  bienvenida: {
    fontSize: 28,
    color: '#1a1a1a',
    fontFamily: 'serif',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  searchText: {
    color: '#666',
    marginLeft: 10,
    fontSize: 14,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginVertical: 15,
  },
  featuredList: {
    flexDirection: 'row',
  },
  featuredItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  featuredImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#D4AF37',
  },
  featuredName: {
    fontSize: 12,
    marginTop: 8,
    color: '#444',
    textAlign: 'center',
  },
  electionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF9F1',
    borderRadius: 15,
    height: 70,
    paddingHorizontal: 15,
    marginBottom: 10,
    elevation: 3,
  },
  goldSeparator: {
    width: 4,
    height: '60%',
    backgroundColor: '#D4AF37',
    borderRadius: 2,
    marginRight: 15,
  },
  electionInfo: {
    flex: 1,
  },
  electionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  electionDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});

export default PantallaInicioContent;