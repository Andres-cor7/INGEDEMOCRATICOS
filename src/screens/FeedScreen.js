import React from 'react';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import TarjetaCandidato from '../components/TarjetaCandidatos';
import { POLITICOS } from '../data/datos'; // Asegúrate que el nombre coincida con tu archivo de datos

const { height } = Dimensions.get('window');

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={POLITICOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TarjetaCandidato item={item} />}
        
        // CONFIGURACIÓN PARA EFECTO "REELS"
        pagingEnabled={true} // Detiene el scroll exactamente en cada tarjeta
        showsVerticalScrollIndicator={false} // Esconde la barra de scroll lateral
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={height} // Indica que cada "salto" es del tamaño de la pantalla
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro para que no se vea blanco entre transiciones
  },
});

export default FeedScreen;