import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// CORRECCIÓN: Volvemos a importar los componentes y los datos que faltaban arriba
import Swiper from 'react-native-deck-swiper';
import TarjetaCandidato from '../components/TarjetaCandidato';
import MenuNavegacion from '../components/MenuNavegacion'; 
import { POLITICOS}  from '../data/datos'; // Importación directa sin llaves para evitar el error anterior

const { height } = Dimensions.get('window');

const FeedScreen = () => {
  const [seccionActual, setSeccionActual] = useState('home');
  const [candidatosConLike, setCandidatosConLike] = useState([]);

  // Al deslizar a la DERECHA en el Feed -> Agregamos a Favoritos (Like)
  const handleSwipeRight = (index) => {
    const candidato = politicosEnFeed[index];
    if (candidato && !candidatosConLike.includes(candidato.id)) {
      setCandidatosConLike((prevLikes) => [...prevLikes, candidato.id]);
    }
  };

  // Función para remover de favoritos (ejecutada por el gesto horizontal)
  const removerDeLikes = (id) => {
    setCandidatosConLike((prevLikes) => prevLikes.filter(candidatoId => candidatoId !== id));
  };

  // Filtros en tiempo real
  const politicosEnFeed = POLITICOS.filter(p => !candidatosConLike.includes(p.id));
  const politicosFavoritos = POLITICOS.filter(p => candidatosConLike.includes(p.id));

  // Renderiza el fondo rojo con la palabra "Eliminar" al arrastrar la fila
  const renderRightActions = (id) => {
    return (
      <View style={styles.deleteBox}>
        <Text style={styles.deleteText}>Eliminar ✕</Text>
      </View>
    );
  };

  const renderContenido = () => {
    switch (seccionActual) {
      case 'home':
        return (
          <View style={styles.center}>
            <Text style={styles.titleText}>🏠 Bienvenido</Text>
          </View>
        );
      case 'reels':
        return politicosEnFeed.length > 0 ? (
          <View style={styles.swiperContainer}>
            <Swiper
              key={`feed-${politicosEnFeed.length}`}
              cards={politicosEnFeed} 
              renderCard={(cardItem) => {
                if (!cardItem) return null;
                return <TarjetaCandidato item={cardItem} isFeedMode={true} />;
              }}
              onSwipedRight={(index) => handleSwipeRight(index)}
              cardIndex={0}
              backgroundColor={'transparent'}
              stackSize={2} 
              stackScale={5}
              stackSeparation={15}
              disableBottomSwipe={true}
              disableTopSwipe={true}
              animateCardOpacity
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
                  renderRightActions={() => renderRightActions(item.id)}
                  onSwipeableOpen={(direction) => {
                    if (direction === 'right') {
                      removerDeLikes(item.id);
                    }
                  }}
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
          <View style={styles.center}>
            <Text style={styles.titleText}>👤 Mi Perfil</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.mainWrapper}>
        <View style={styles.contentArea}>
          {renderContenido()}
        </View>
        <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: { flex: 1, backgroundColor: '#121212' },
  contentArea: { flex: 1, marginBottom: 75 },
  swiperContainer: { flex: 1, marginTop: -40 }, 
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titleText: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  noDataText: { fontSize: 18, color: '#888', textAlign: 'center', fontWeight: '500' },
  subText: { fontSize: 14, color: '#666', marginTop: 10, textAlign: 'center' },
  
  likesContainer: { flex: 1, paddingTop: 50 },
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
  }
});

export default FeedScreen;