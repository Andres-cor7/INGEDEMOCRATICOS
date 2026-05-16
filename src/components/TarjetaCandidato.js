import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

const { width } = Dimensions.get('window');

const TarjetaCandidato = ({ item, isFeedMode }) => {
  const [liked, setLiked] = useState(false);

  // ==========================================
  // DISEÑO 1: Vista compacta (Sección de LIKES / HEART)
  // ==========================================
  if (!isFeedMode) {
    return (
      <View style={styles.miniCard}>
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
      </View>
    );
  }

  // ==========================================
  // DISEÑO 2: Vista clásica grande (Sección de REELS / FEED)
  // ==========================================
  return (
    <View style={styles.card}>
      {/* Reducimos la foto al 35% para que quepa más texto en tarjeta compacta */}
      <Image source={item.foto} style={[styles.image, { height: '35%' }]} />
      
      <View style={styles.actionRow}>
        <View style={[styles.indicatorBadge, styles.leftBadge]}>
          <Text style={styles.indicatorText}>✕</Text>
        </View>
        <View style={[styles.indicatorBadge, styles.rightBadge]}>
          <Text style={styles.indicatorText}>❤️</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        {/* Ajuste leve de tamaños de letra */}
        <Text style={[styles.nombre, { fontSize: 24 }]}>{item.nombre}</Text>
        <Text style={[styles.apellido, { fontSize: 28, color: item.colorPrincipal || '#B8860B' }]}>
          {item.apellido}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.puestoText}>{item.puesto}</Text>
        <Text style={styles.distritoText}>{item.distrito}</Text>
        <Text style={[styles.seccionTitulo, { marginTop: 10 }]}>✨ Propuestas</Text>
        {/* Reducimos lineas para evitar overflow */}
        <Text style={styles.descripcion} numberOfLines={7}>{item.propuestas}</Text>
      </View>

      {/* CONTENEDOR DE BOTONES CON Z-INDEX BAJO */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity 
          style={styles.circleButton}
          onPress={() => Alert.alert("Candidato descartado")}
        >
          <Text style={{ fontSize: 20 }}>✕</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={() => setLiked(!liked)} 
          style={[
            styles.circleButton, 
            liked ? { backgroundColor: '#ff4444' } : { backgroundColor: '#ffffff' }
          ]}
        >
          <Text style={{ fontSize: 20, color: liked ? '#FFF' : '#333' }}>
            {liked ? '❤️' : '♥'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.circleButton}
          onPress={() => Alert.alert("Guardado en favoritos")}
        >
          <Text style={{ fontSize: 20 }}>🔖</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fffae8', 
    borderRadius: 30, 
    padding: 20,
    elevation: 3, // Muy baja elevación para que no perfore
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    borderRadius: 20, 
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  indicatorBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  leftBadge: { borderWidth: 1, borderColor: 'rgba(255, 68, 68, 0.3)' },
  rightBadge: { borderWidth: 1, borderColor: 'rgba(184, 134, 11, 0.3)' },
  indicatorText: { fontSize: 12, fontWeight: 'bold', color: '#333' },
  infoContainer: {
    flex: 1,
    zIndex: 1,
  },
  nombre: { color: '#1a1a1a' },
  apellido: { fontWeight: 'bold', marginTop: -8 },
  separator: { height: 2, backgroundColor: '#ffffff', width: 50, marginVertical: 10 },
  puestoText: { fontSize: 13, fontWeight: '700', color: '#666' },
  distritoText: { fontSize: 13, color: '#888' },
  seccionTitulo: { fontSize: 16, fontWeight: 'bold' },
  descripcion: { fontSize: 14, color: '#444', lineHeight: 19 },
  
  floatingButtons: {
    position: 'absolute',
    bottom: 15, // Un poco más arriba para asegurar
    right: 15,
    flexDirection: 'column',
    gap: 10,
    zIndex: 1, // Z-Index ultra bajo
  },
  circleButton: {
    width: 50, // Ligeramente más pequeños
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  miniCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', 
    width: width * 0.92,
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6', 
  },
  miniImage: { 
    width: 55, 
    height: 55, 
    borderRadius: 14, 
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#D4AF37'
  },
  miniInfoContainer: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  miniNombreCompleto: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a' },
  miniPuestoText: { fontSize: 12, color: '#888', marginTop: 2 },
  miniHeartText: { fontSize: 20, marginRight: 5 }
});

export default TarjetaCandidato;