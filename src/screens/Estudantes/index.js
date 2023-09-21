import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {EstudanteContext} from '../../context/EstudanteProvider';
import Item from './Item';
import { CommonActions } from '@react-navigation/native';

// import { Container } from './styles';

const Estudantes = ({navigation}) => {
  const {estudantes} = useContext(EstudanteContext);

  function routeEstudante(estudante) {
    console.log(estudante);
    navigation.navigate('Estudante', {estudante});
  }

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={estudantes}
        renderItem={({item}) => (
          <Item item={item} onPress={() => alert('foi')} />
        )}
        keyExtractor={item => item.uid}
      /> */}
      {estudantes.map((value, key) => (
        <Item item={value} onPress={() => routeEstudante(value)} key={key} />
      ))}
    </View>
  );
};
export default Estudantes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
