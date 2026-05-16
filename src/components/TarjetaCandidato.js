import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// IMPORTANTE: Importamos el hook de navegación nativo
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const TarjetaCandidato = ({ item, isFeedMode }) => {
  const navigation = useNavigation(); // Activamos el control de rutas

  // Función al presionar la tarjeta
  const manejarClicks = () => {
    // Redirecciona a la pantalla "DetallePolítico" y le inyecta todo el objeto del candidato
    navigation.navigate('DetallePolitico', { politico: item });
  };

  // DISEÑO 1: Vista compacta y horizontal para LIKES
  if (!isFeedMode) {
    return (
      <TouchableOpacity style={styles.miniCard} onPress={manejarClicks} activeOpacity={0.8}>
        <Image source={item.foto} style={styles.miniImage} />
        <View style={styles.miniInfoContainer}>
          <Text style={styles.miniNombreCompleto} numberOfLines={1}>
            {item.nombre} {item.apellido}
          </Text>
          <Text style={styles.miniPuestoText} numberOfLines={1}>
            {item.puesto}
          </Text>
        </View>
        <Text style={styles.miniHeartText}>❤️</Text>
      </TouchableOpacity>
    );
  }

  // DISEÑO 2: Vista clásica grande y vertical para el FEED
  return (
    <TouchableOpacity style={styles.card} onPress={manejarClicks} activeOpacity={0.95}>
      <Image source={item.foto} style={styles.image} />
      
      <View style={styles.actionRow}>
        <View style={[styles.indicatorBadge, styles.leftBadge]}>
          <Text style={styles.indicatorText}>✕</Text>
        </View>
        <View style={[styles.indicatorBadge, styles.rightBadge]}>
          <Text style={styles.indicatorText}>❤️</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={[styles.apellido, { color: item.colorPrincipal || '#B8860B' }]}>
          {item.apellido}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.puestoText}>{item.puesto}</Text>
        <Text style={styles.distritoText}>{item.distrito}</Text>
        <Text style={styles.seccionTitulo}>✨ Propuestas</Text>
        <Text style={styles.descripcion} numberOfLines={3}>{item.propuestas}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    height: height * 0.76, 
    backgroundColor: '#FDF9F1', 
    borderRadius: 30, 
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    alignSelf: 'center',
    position: 'relative',
  },
  image: { width: '100%', height: '40%', borderRadius: 20, marginBottom: 15 },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  indicatorBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', elevation: 3 },
  leftBadge: { borderWidth: 1, borderColor: 'rgba(255, 68, 68, 0.3)' },
  rightBadge: { borderWidth: 1, borderColor: 'rgba(184, 134, 11, 0.3)' },
  indicatorText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  infoContainer: { flex: 1 },
  nombre: { fontSize: 28, color: '#1a1a1a' },
  apellido: { fontSize: 32, fontWeight: 'bold', marginTop: -8 },
  separator: { height: 2, backgroundColor: '#D4AF37', width: 50, marginVertical: 15 },
  puestoText: { fontSize: 14, fontWeight: '700', color: '#666' },
  distritoText: { fontSize: 14, color: '#888' },
  seccionTitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  descripcion: { fontSize: 15, color: '#444', lineHeight: 20 },

  miniCard: {
    flexDirection: 'row',
    backgroundColor: '#FDF9F1', 
    width: width * 0.92,
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: 'center',
  },
  miniImage: { width: 55, height: 55, borderRadius: 14, backgroundColor: '#eee' },
  miniInfoContainer: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  miniNombreCompleto: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' },
  miniPuestoText: { fontSize: 12, color: '#666', marginTop: 2 },
  miniHeartText: { fontSize: 22, marginRight: 10 }
});

export default TarjetaCandidato;