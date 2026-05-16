import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Swiper from 'react-native-deck-swiper';

// COMPONENTES
import HeaderSuperior from '../components/HeaderSuperior'; 
import MenuNavegacion from '../components/MenuNavegacion'; 
import TarjetaCandidato from '../components/TarjetaCandidato'; 
import PantallaInicioContent from '../components/PantallaInicioContent'; 
import DetallePoliticoScreen from '../screens/DetallePoliticoScreen'; // NUEVA PANTALLA

// DATOS
import { POLITICOS } from '../data/datos'; 

const FeedScreen = () => {
  const [seccionActual, setSeccionActual] = useState('home');
  const [candidatosConLike, setCandidatosConLike] = useState([]);
  
  // NUEVO ESTADO: Maneja qué candidato estamos viendo a detalle
  const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null);

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

  const renderRightActions = (id) => {
    return (
      <View style={styles.deleteBox}>
        <Text style={styles.deleteText}>Eliminar ✕</Text>
      </View>
    );
  };

  const SettingCard = ({ titulo }) => (
    <TouchableOpacity style={styles.settingCard}>
      <Text style={styles.settingText}>{titulo}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  // Si hay un candidato seleccionado, mostramos la pantalla de detalles por encima de todo
  if (candidatoSeleccionado) {
    return (
      <DetallePoliticoScreen 
        politico={candidatoSeleccionado} 
        onBack={() => setCandidatoSeleccionado(null)} 
      />
    );
  }

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
              cardWidth={Dimensions.get('window').width * 0.92}  
              cardHeight={Dimensions.get('window').height * 0.60} 
              marginTop={20} 
              verticalMargin={0}
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
            <Text style={styles.likesSubtitle}>Desliza para quitar, toca para ver detalles</Text>
            
            <FlatList
              data={politicosFavoritos}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
              renderItem={({ item }) => (
                <Swipeable
                  renderRightActions={() => renderRightActions(item.id)}
                  onSwipeableOpen={(direction) => {
                    if (direction === 'right') removerDeLikes(item.id);
                  }}
                >
                  <View style={styles.favoriteCardWrapper}>
                    {/* AQUI PASAMOS LA FUNCION PARA ABRIR LOS DETALLES */}
                    <TarjetaCandidato 
                      item={item} 
                      isFeedMode={false} 
                      onVerDetalles={setCandidatoSeleccionado} 
                    />
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
            <SettingCard titulo="Soporte" />
            <SettingCard titulo="Acerca de nosotros" />
            <SettingCard titulo="Terminos y Condiciones" />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Fondo blanco dinámico para Inicio */}
      <View style={[styles.mainWrapper, { backgroundColor: seccionActual === 'home' ? '#FFFFFF' : '#121212' }]}>
        <HeaderSuperior />
        <View style={styles.contentArea}>
          {renderContenido()}
        </View>
        <MenuNavegacion setSeccion={setSeccionActual} seccionActual={seccionActual} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: { flex: 1 },
  contentArea: { flex: 1, marginTop: 90, marginBottom: 85 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  noDataText: { fontSize: 18, color: '#888', textAlign: 'center', fontWeight: '500' },
  subText: { fontSize: 14, color: '#666', marginTop: 10, textAlign: 'center' },
  likesContainer: { flex: 1, paddingTop: 15 },
  likesHeaderTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF', marginLeft: 20 },
  likesSubtitle: { fontSize: 13, color: '#555', marginLeft: 20, marginBottom: 15 },
  favoriteCardWrapper: { marginVertical: 5, alignItems: 'center' },
  deleteBox: { backgroundColor: '#ff4444', justifyContent: 'center', alignItems: 'flex-end', width: Dimensions.get('window').width * 0.92, alignSelf: 'center', borderRadius: 18, paddingRight: 20, marginVertical: 5, height: 79 },
  deleteText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  settingsContainer: { flex: 1, paddingHorizontal: 20, paddingTop: 15 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', marginBottom: 25, color: '#FFF' },
  settingCard: { backgroundColor: '#ffffff', paddingVertical: 20, paddingHorizontal: 20, borderRadius: 15, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 3 },
  settingText: { fontSize: 16, color: '#333', fontWeight: '500' },
  arrow: { fontSize: 22, color: '#CCC' }
});

export default FeedScreen;