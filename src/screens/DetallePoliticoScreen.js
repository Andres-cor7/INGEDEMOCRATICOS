import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const DetallePoliticoScreen = ({ route, navigation }) => {
  const { politico } = route.params;

  return (
    <View style={styles.container}>
      {/* Barra superior para regresar */}
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil Detallado</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Foto del Candidato */}
        <Image source={politico.foto} style={styles.bigImage} />

        {/* Puesto */}
        <View style={styles.badgePuestoContainer}>
          <Text style={[styles.badgePuesto, { backgroundColor: politico.colorPrincipal || '#B8860B' }]}>
            {politico.puesto}
          </Text>
        </View>

        {/* Nombre y Distrito */}
        <Text style={styles.nombreCompleto}>{politico.nombre} {politico.apellido}</Text>
        <Text style={styles.distritoText}>{politico.distrito}</Text>
        
        {/* Estudios (Dato Extra) */}
        <Text style={styles.estudiosText}>🎓 {politico.estudios}</Text>

        <View style={styles.divider} />

        {/* Biografía */}
        <Text style={styles.subTitle}>📚 Biografía y Trayectoria</Text>
        <Text style={styles.bodyText}>{politico.biografia}</Text>

        {/* Propuestas Completas (La info extendida) */}
        <Text style={styles.subTitle}>📜 Plan de Propuestas Extendido</Text>
        <Text style={styles.bodyText}>{politico.propuestasCompletas}</Text>
        
        {/* Historial Estadístico */}
        <Text style={styles.subTitle}>📊 Datos Estadísticos de la App</Text>
        <Text style={styles.bodyText}>
          Este candidato registra un **{politico.aprobacion}** por los usuarios que han interactuado con las tarjetas.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  customHeader: { flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: '#1a1a1a' },
  backButton: { paddingVertical: 6, paddingHorizontal: 12, backgroundColor: '#333', borderRadius: 8 },
  backButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 20 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  bigImage: { width: '100%', height: 320, borderRadius: 24, backgroundColor: '#222', resizeMode: 'cover' },
  badgePuestoContainer: { flexDirection: 'row', marginTop: 15 },
  badgePuesto: { color: '#FFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, fontWeight: 'bold', fontSize: 12, textTransform: 'uppercase' },
  nombreCompleto: { fontSize: 30, fontWeight: 'bold', color: '#FFF', marginTop: 10 },
  distritoText: { fontSize: 16, color: '#A0A0A0', marginTop: 2 },
  estudiosText: { color: '#888', fontSize: 14, fontStyle: 'italic', marginTop: 6 },
  divider: { height: 1, backgroundColor: '#333', marginVertical: 20 },
  subTitle: { fontSize: 19, fontWeight: 'bold', color: '#D4AF37', marginTop: 15, marginBottom: 8 },
  bodyText: { fontSize: 15, color: '#CCC', lineHeight: 22, marginBottom: 10 }
});

export default DetallePoliticoScreen;