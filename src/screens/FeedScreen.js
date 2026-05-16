import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, FlatList, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

// COMPONENTES
import HeaderSuperior from '../components/HeaderSuperior'; 
import MenuNavegacion from '../components/MenuNavegacion'; 
import TarjetaCandidato from '../components/TarjetaCandidato'; 
import PantallaInicioContent from '../components/PantallaInicioContent'; 

// DATOS
import { POLITICOS } from '../data/datos';

const FeedScreen = () => {
  const [seccionActual, setSeccionActual] = useState('home');
  const [candidatosConLike, setCandidatosConLike] = useState([]);

  const handleSwipeRight = (index) => {
    const candidato = politicosEnFeed[index];
    if (candidato && !candidatosConLike.includes(candidato.id)) {
      setCandidatosConLike((prevLikes) => [...prevLikes, candidato.id]);
    }
  };

  const removerDeLikes = (id) => {
    setCandidatosConLike((prevLikes) => prevLikes.filter(candidatoId => candidatoId !== id));
  };

  const politicosEnFeed = POLITICOS.filter(p => !candidatosConLike.includes(p.id));
  const politicosFavoritos = POLITICOS.filter(p => candidatosConLike.includes(p.id));

  const renderRightActions = () => {
    return (
      <View style={styles.deleteBox}>
        <Text style={styles.deleteText}>Eliminar ✕</Text>
      </View>
    );
  };

  const SettingCard = ({ titulo }) => (
    <TouchableOpacity 
      style={styles.settingCard}
      onPress={() => console.log(`Navegando a: ${titulo}`)} 
    >
      <Text style={styles.settingText}>{titulo}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const renderContenido = () => {
    switch (seccionActual) {
      case 'home':
        return <PantallaInicioContent />;
        
      case 'reels':
        return politicosEnFeed.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: '#fffcef' }}>
            <Swiper
              key={`feed-${politicosEnFeed.length}`}
              cards={politicosEnFeed} 
              renderCard={(cardItem) => {
                if (!cardItem) return null;
                return <TarjetaCandidato item={cardItem} isFeedMode={true} />;
              }}
              onSwipedRight={(index) => handleSwipeRight(index)}
              cardIndex={0}
              backgroundColor={'#fffcef'}
              stackSize={2} 
              stackScale={5}
              stackSeparation={15}
              disableBottomSwipe={true}
              disableTopSwipe={true}
              animateCardOpacity
              
              // ============================================
              // SOLUCIÓN AGRESIVA DE GEOMETRÍA
              // Obligamos a la tarjeta a ser más pequeña y estar más arriba
              // ============================================
              cardWidth={Dimensions.get('window').width * 0.92}  
              cardHeight={Dimensions.get('window').height * 0.60} // <--- Reducido considerablemente para que quepa bien
              
              marginTop={20} // <--- Pequeño margen superior fijo
              verticalMargin={0} // No usamos márgenes calculados por Swiper
              cardVerticalMargin={0}
            />
          </View>
        ) : (
          <View style={styles.center}>
            <Text style={styles.noDataText}>🎉 ¡Has reaccionado a todos los candidatos!</Text>
            <Text style={styles.subText}>Revisa tus seleccionados en la pestaña de Likes ❤️</Text>
          </View>
        );
        
      case 'heart':
        return politicosFavoritos.length > 0 ? (
          <View style={styles.likesContainer}>
            <Text style={styles.likesHeaderTitle}>Mis Candidatos ❤️</Text>
            <Text style={styles.likesSubtitle}>Desliza una fila a la izquierda para quitar</Text>
            
            <FlatList
              data={politicosFavoritos}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
              renderItem={({ item }) => (
                <Swipeable
                  renderRightActions={renderRightActions}
                  onSwipeableOpen={() => removerDeLikes(item.id)}
                >
                  <View style={styles.favoriteCardWrapper}>
                    <TarjetaCandidato item={item} isFeedMode={false} />
                  </View>
                </Swipeable>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={styles.center}>
            <Text style={styles.noDataText}>❤️ Tus candidatos favoritos aparecerán aquí</Text>
          </View>
        );
        
      case 'profile':
        return (
          <ScrollView style={styles.settingsContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.headerTitle}>Configuración</Text>
            <SettingCard titulo="Ubicación" />
            <SettingCard titulo="Accesibilidad" />
            <SettingCard titulo="Ruben & Sheinbawm forever ❤️" />
            <SettingCard titulo="Soporte" />
            <SettingCard titulo="Acerca de nosotros" />
          </ScrollView>
        );
        
      default:
        return null;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.mainWrapper, { backgroundColor: seccionActual === 'home' ? '#FFFFFF' : '#121212' }]}>
        
        {/* Header Fijo */}
        <HeaderSuperior />

        {/* Contenido Cambiante */}
        <View style={styles.contentArea}>
          {renderContenido()}
        </View>
        
        {/* Menú Inferior Fijo (Debe estar al final para estar arriba en render) */}
        <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />

      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: { flex: 1 },
  contentArea: { 
    flex: 1, 
    marginTop: 90,  // Header height
    marginBottom: 85 // <--- Aumentado de 75 a 85 para contener agresivamente la tarjeta Swiper
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  noDataText: { fontSize: 18, color: '#888', textAlign: 'center', fontWeight: '500' },
  subText: { fontSize: 14, color: '#666', marginTop: 10, textAlign: 'center' },
  
  likesContainer: { flex: 1, paddingTop: 15 },
  likesHeaderTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF', marginLeft: 20 },
  likesSubtitle: { fontSize: 13, color: '#555', marginLeft: 20, marginBottom: 15 },
  favoriteCardWrapper: {
    marginVertical: 5,
    alignItems: 'center',
  },
  
  deleteBox: {
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width * 0.92,
    alignSelf: 'center',
    borderRadius: 18,
    paddingRight: 20,
    marginVertical: 5,
    height: 79, 
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  settingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#FFF', 
  },
  settingCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 22,
    color: '#CCC',
  }
});

export default FeedScreen;