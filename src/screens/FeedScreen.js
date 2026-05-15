import React from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import TarjetaCandidato from '../components/TarjetaCandidato';
import MenuNavegacion from '../components/MenuNavegacion'; 
import { POLITICOS } from '../data/datos';

const { height } = Dimensions.get('window');

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Lista de políticos */}
      <FlatList
        data={POLITICOS}
        renderItem={({ item }) => <TarjetaCandidato item={item} />}
        keyExtractor={item => item.id}
        pagingEnabled
        vertical
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
      />
      
      {/* El menú queda fijo aquí abajo */}
      <MenuNavegacion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default FeedScreen;