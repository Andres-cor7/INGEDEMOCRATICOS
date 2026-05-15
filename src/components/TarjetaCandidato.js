import React from 'react';
// CORRECCIÓN 1: Se añadió TouchableOpacity aquí abajo
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const TarjetaCandidato = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={item.foto} style={styles.image} />
        
        <View style={styles.infoContainer}>
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text style={[styles.apellido, { color: item.colorPrincipal }]}>
            {item.apellido}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.puestoText}>{item.puesto}</Text>
          <Text style={styles.distritoText}>{item.distrito}</Text>
          
          <Text style={styles.seccionTitulo}>✨ Propuestas</Text>
          <Text style={styles.descripcion}>{item.propuestas}</Text>
        </View>

        {/* CORRECCIÓN 2: Los botones ahora están DENTRO del View 'card' */}
        <View style={styles.floatingButtons}>
          <TouchableOpacity style={styles.circleButton}>
            <Text style={{ fontSize: 20, color: '#666' }}>✕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.circleButton, styles.goldButton]}>
            <Text style={{ fontSize: 20, color: '#FFF' }}>♥</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <Text style={{ fontSize: 20, color: '#B8860B' }}>🔖</Text>
          </TouchableOpacity>
        </View>
      </View> 
      {/* Aquí cierra la tarjeta */}
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
    height: height * 0.85,
    backgroundColor: '#FDF9F1', 
    borderRadius: 30, 
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '45%',
    borderRadius: 20, 
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 32,
    fontFamily: 'serif', 
    color: '#1a1a1a',
  },
  apellido: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginTop: -8,
  },
  separator: {
    height: 1.5,
    backgroundColor: '#D4AF37', 
    width: 60,
    marginVertical: 15,
  },
  puestoText: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#666',
    fontWeight: '700',
  },
  distritoText: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1a1a1a',
  },
  descripcion: {
    fontSize: 15,
    color: '#444',
    marginTop: 5,
    lineHeight: 22,
  },
  floatingButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    gap: 12,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  goldButton: {
    backgroundColor: '#B8860B', 
  }
});

export default TarjetaCandidato;