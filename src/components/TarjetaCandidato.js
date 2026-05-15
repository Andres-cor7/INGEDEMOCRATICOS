import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const TarjetaCandidato = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={item.foto} style={styles.image} />
        
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

        {/* CONTENEDOR DE BOTONES CON Z-INDEX */}
        <View style={styles.floatingButtons}>
          <TouchableOpacity 
            style={styles.circleButton}
            onPress={() => Alert.alert("Candidato descartado")}
          >
            <Text style={{ fontSize: 20 }}>✕</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.7} // Hace que brille al tocarlo
            onPress={() => setLiked(!liked)} 
            style={[
              styles.circleButton, 
              liked ? { backgroundColor: '#ff4444' } : { backgroundColor: '#B8860B' }
            ]}
          >
            <Text style={{ fontSize: 20, color: '#FFF' }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', 
  },
  card: {
    width: width * 0.92,
    height: height * 0.82,
    backgroundColor: '#FDF9F1', 
    borderRadius: 30, 
    padding: 20,
    elevation: 10,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '40%',
    borderRadius: 20, 
    marginBottom: 15,
  },
  infoContainer: {
    flex: 1,
    zIndex: 1,
  },
  nombre: { fontSize: 28, color: '#1a1a1a' },
  apellido: { fontSize: 32, fontWeight: 'bold', marginTop: -8 },
  separator: { height: 2, backgroundColor: '#D4AF37', width: 50, marginVertical: 15 },
  puestoText: { fontSize: 14, fontWeight: '700', color: '#666' },
  distritoText: { fontSize: 14, color: '#888' },
  seccionTitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  descripcion: { fontSize: 15, color: '#444', lineHeight: 20 },
  
  floatingButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    gap: 12,
    zIndex: 999, // <--- FUNDAMENTAL
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
});

export default TarjetaCandidato;