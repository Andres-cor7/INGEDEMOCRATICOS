import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PantallaInicioContent = () => {
  // Datos simulados para los candidatos destacados
  const candidatosDestacados = [
    { id: '1', nombre: 'Luis Fernando', foto: require('../../assets/Dante.jpeg') },
    { id: '2', nombre: 'Claudia S.', foto: require('../../assets/Ruben.jpeg') },
    { id: '3', nombre: 'Rubén M.', foto: require('../../assets/Ruben.jpeg') }
  ];

  // Nueva sección: Diccionario/Información de puestos
  const informacionPuestos = [
    { 
      id: '1', 
      titulo: 'Presidencia Municipal', 
      icono: 'business', 
      desc: 'Se encarga de los servicios básicos de tu ciudad: alumbrado público, baches, recolección de basura y policía preventiva.' 
    },
    { 
      id: '2', 
      titulo: 'Diputación (Local/Federal)', 
      icono: 'book', 
      desc: 'Crea, modifica y elimina leyes. También son los encargados de aprobar en qué se gasta el dinero público (presupuesto).' 
    },
    { 
      id: '3', 
      titulo: 'Senaduría', 
      icono: 'globe', 
      desc: 'Representa a tu estado a nivel nacional. Aprueban tratados internacionales y vigilan la política exterior del país.' 
    },
    { 
      id: '4', 
      titulo: 'Gubernatura', 
      icono: 'map', 
      desc: 'Administra todo el estado. Coordina grandes obras de infraestructura, hospitales estatales y la seguridad pública a nivel estatal.' 
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Bienvenida */}
      <View style={styles.header}>
        <Text style={styles.bienvenida}>Hola, Ciudadano</Text>
        <Text style={styles.subtitulo}>Conoce las propuestas para el ITESM y Chihuahua</Text>
      </View>

      {/* Buscador Visual */}
      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Busca por candidato o distrito...</Text>
      </TouchableOpacity>

      {/* Candidatos Destacados */}
      <Text style={styles.seccionTitulo}>✨ Candidatos Destacados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredList}>
        {candidatosDestacados.map(candidato => (
          <TouchableOpacity key={candidato.id} style={styles.featuredItem}>
            <Image source={candidato.foto} style={styles.featuredImage} />
            <Text style={styles.featuredName}>{candidato.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Próximas Elecciones */}
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

      {/* NUEVA SECCIÓN: Información de Puestos */}
      <Text style={styles.seccionTitulo}>📖 ¿Qué hace cada puesto?</Text>
      {informacionPuestos.map(puesto => (
        <View key={puesto.id} style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons name={puesto.icono} size={24} color="#B8860B" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{puesto.titulo}</Text>
            <Text style={styles.infoDesc}>{puesto.desc}</Text>
          </View>
        </View>
      ))}

      {/* Espacio final para que el scroll no quede tapado por el menú inferior */}
      <View style={{ height: 120 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco como en tu captura
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  bienvenida: {
    fontSize: 28,
    color: '#1a1a1a',
    // fontFamily: 'serif', (Lo puedes quitar si prefieres la letra default de tu celular)
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
    marginBottom: 10, // Un poco de espacio extra abajo
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
  
  // Estilos de las Tarjetas de Elecciones
  electionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF9F1',
    borderRadius: 15,
    height: 70,
    paddingHorizontal: 15,
    marginBottom: 10,
    elevation: 2, // Sombra suave
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
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

  // NUEVOS ESTILOS: Tarjetas de Información de Puestos
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0', // Borde gris muy sutil
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FDF9F1', // Fondo cremita para que resalte el oro
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});

export default PantallaInicioContent;