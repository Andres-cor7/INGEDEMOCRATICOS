import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

const { width } = Dimensions.get('window');

const TarjetaCandidato = ({ item, isFeedMode }) => {
  const [liked, setLiked] = useState(false);

  // ==========================================
  // DISEÑO 1: Vista compacta y horizontal (Sección de LIKES / HEART)
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
  // DISEÑO 2: Vista clásica grande y vertical (Sección de REELS / FEED)
  // ==========================================
  return (
    <View style={styles.card}>
      <Image source={item.foto} style={styles.image} />
      
      {/* Indicadores visuales integrados */}
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
        <Text style={styles.descripcion}>{item.propuestas}</Text>
      </View>

      {/* CONTENEDOR DE BOTONES CON INTERACCIÓN Y Z-INDEX */}
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
  // --- ESTILOS FEED COMPLETO (LA TARJETA ACEPTA EL TAMAÑO DEL SWIPER) ---
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fffae8', 
    borderRadius: 30, 
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '40%',
    borderRadius: 20, 
    marginBottom: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  indicatorBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  leftBadge: { borderWidth: 1, borderColor: 'rgba(255, 68, 68, 0.3)' },
  rightBadge: { borderWidth: 1, borderColor: 'rgba(184, 134, 11, 0.3)' },
  indicatorText: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  infoContainer: {
    flex: 1,
    zIndex: 1,
  },
  nombre: { fontSize: 28, color: '#1a1a1a' },
  apellido: { fontSize: 32, fontWeight: 'bold', marginTop: -8 },
  separator: { height: 2, backgroundColor: '#ffffff', width: 50, marginVertical: 12 },
  puestoText: { fontSize: 14, fontWeight: '700', color: '#666' },
  distritoText: { fontSize: 14, color: '#888' },
  seccionTitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 12 },
  descripcion: { fontSize: 15, color: '#444', lineHeight: 20 },
  
  floatingButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    gap: 12,
    zIndex: 9999,
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  // --- ESTILOS TARJETA MINI (LISTA DE FAVORITOS EN LIKES) ---
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