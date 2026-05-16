import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PantallaInicioContent = () => {
  // Nueva sección neutral de utilidad general para sustituir los destacados
  const guiaCiudadana = [
    { 
      id: '1', 
      titulo: 'Verificación de Credencial', 
      icono: 'card', 
      desc: 'Consulta la vigencia de tu credencial para votar (INE) con anticipación para asegurar tu derecho a participar.' 
    },
    { 
      id: '2', 
      titulo: 'Ubicación de Casilla', 
      icono: 'location', 
      desc: 'Localiza el centro de votación asignado a tu sección electoral mediante los sistemas oficiales previo al día de la elección.' 
    },
    { 
      id: '3', 
      titulo: 'Análisis de Plataformas', 
      icono: 'analytics', 
      desc: 'Utiliza las herramientas digitales para contrastar y evaluar de manera objetiva los planes de trabajo de cada candidatura.' 
    }
  ];

  // Información institucional de puestos sin emojis
  const informacionPuestos = [
    { 
      id: '1', 
      titulo: 'Presidencia Municipal', 
      icono: 'business', 
      desc: 'Se encarga de los servicios básicos de la ciudad: alumbrado público, baches, recolección de basura y policía preventiva.' 
    },
    { 
      id: '2', 
      titulo: 'Diputación Federal', 
      icono: 'book', 
      desc: 'Crea, modifica y elimina leyes a nivel nacional. Aprueban en qué se gasta el presupuesto del país.' 
    },
    { 
      id: '3', 
      titulo: 'Senaduría', 
      icono: 'globe', 
      desc: 'Representa al estado a nivel nacional. Aprueban tratados internacionales y vigilan la política exterior.' 
    },
    { 
      id: '4', 
      titulo: 'Gubernatura', 
      icono: 'map', 
      desc: 'Administra el estado. Coordina obras de infraestructura, hospitales estatales y la seguridad pública.' 
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Bienvenida */}
      <View style={styles.header}>
        <Text style={styles.bienvenida}>Hola, Ciudadano</Text>
        <Text style={styles.subtitulo}>Conoce las propuestas para el Estado de Chihuahua</Text>
      </View>

      {/* Buscador Visual */}
      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Busca por candidato o distrito...</Text>
      </TouchableOpacity>

      {/* NUEVA SECCIÓN: Guía Ciudadana (Sustituye de forma neutral a Candidatos Destacados) */}
      <Text style={styles.seccionTitulo}>Guía para el Voto Informado</Text>
      {guiaCiudadana.map(paso => (
        <View key={paso.id} style={styles.infoCard}>
          <View style={styles.iconContainer}>
            <Ionicons name={paso.icono} size={24} color="#B8860B" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{paso.titulo}</Text>
            <Text style={styles.infoDesc}>{paso.desc}</Text>
          </View>
        </View>
      ))}

      {/* Próximas Elecciones Reales (2027) */}
      <Text style={styles.seccionTitulo}>Próximas Elecciones en Chihuahua</Text>
      
      <View style={styles.electionCard}>
        <View style={styles.goldSeparator}></View>
        <View style={styles.electionInfo}>
          <Text style={styles.electionTitle}>Elecciones Federales Intermedias</Text>
          <Text style={styles.electionDate}>Junio 2027 · Diputaciones Federales</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#B8860B" />
      </View>
      
      <View style={styles.electionCard}>
        <View style={styles.goldSeparator}></View>
        <View style={styles.electionInfo}>
          <Text style={styles.electionTitle}>Elecciones Estatales Locales</Text>
          <Text style={styles.electionDate}>Junio 2027 · Gubernatura y Alcaldías</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#B8860B" />
      </View>

      {/* SECCIÓN: Información de Puestos */}
      <Text style={styles.seccionTitulo}>¿Qué hace cada puesto?</Text>
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

      {/* Espacio final para evitar superposiciones con el menú inferior */}
      <View style={{ height: 120 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
  },
  bienvenida: {
    fontSize: 28,
    color: '#1a1a1a',
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
  electionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF9F1',
    borderRadius: 15,
    height: 70,
    paddingHorizontal: 15,
    marginBottom: 10,
    elevation: 2, 
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
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0', 
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
    backgroundColor: '#FDF9F1', 
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