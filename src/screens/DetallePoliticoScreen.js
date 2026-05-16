import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DetallePoliticoScreen = ({ route, navigation }) => {
  // Capturamos el objeto del político que nos mandó la tarjeta anterior
  const { politico } = route.params;

  return (
    <View style={styles.container}>
      {/* HEADER DE NAVEGACIÓN PERSONALIZADO */}
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil Político</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Image source={politico.foto} style={styles.bigImage} />

        <View style={styles.badgePuestoContainer}>
          <Text style={[styles.badgePuesto, { backgroundColor: politico.colorPrincipal || '#B8860B' }]}>
            {politico.puesto}
          </Text>
        </View>

        <Text style={styles.nombreCompleto}>{politico.nombre} {politico.apellido}</Text>
        <Text style={styles.distritoText}>{politico.distrito}</Text>

        <View style={styles.divider} />

        {/* AQUÍ PUEDES AGREGAR DATOS EXTRA ESTADÍSTICOS O BIOGRAFÍA */}
        <Text style={styles.subTitle}>📚 Biografía y Trayectoria</Text>
        <Text style={styles.bodyText}>
          Aquí puedes mapear datos extra que agregues a tu archivo de datos, como su nivel de estudios, partidos políticos anteriores, o años de servicio en el estado de Chihuahua.
        </Text>

        <Text style={styles.subTitle}>📜 Propuestas Completas</Text>
        <Text style={styles.bodyText}>{politico.propuestas}</Text>
        
        <Text style={styles.subTitle}>📊 Historial Estadístico</Text>
        <Text style={styles.bodyText}>
          Grado de aprobación en la app: 85% de votos positivos en el mazo de Chihuahua.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a1a',
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  backButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 20 },
  
  scrollContent: { padding: 20, paddingBottom: 40 },
  bigImage: { width: '100%', height: 300, borderRadius: 24, backgroundColor: '#222' },
  
  badgePuestoContainer: { flexDirection: 'row', marginTop: 15 },
  badgePuesto: {
    color: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  nombreCompleto: { fontSize: 32, fontWeight: 'bold', color: '#FFF', marginTop: 10 },
  distritoText: { fontSize: 16, color: '#888', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#333', marginVertical: 20 },
  subTitle: { fontSize: 20, fontWeight: 'bold', color: '#D4AF37', marginTop: 15, marginBottom: 8 },
  bodyText: { fontSize: 15, color: '#CCC', lineHeight: 22, marginBottom: 10 }
});

export default DetallePoliticoScreen;