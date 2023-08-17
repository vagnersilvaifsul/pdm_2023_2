import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MeuButtom from '../../componentes/MeuButtom';
import {CommonActions} from '@react-navigation/native';
// import { Container } from './styles';

const Home = ({navigation}) => {
  const [cont, setCont] = useState(0);

  function incrementar() {
    setCont(cont + 1);
  }

  function decrementar() {
    setCont(cont - 1);
  }

  function mudarDeScreen() {
    navigation.navigate('SignIn');
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{name: 'SignIn'}],
    //   }),
    // );
  }

  useEffect(() => {
    console.log('Reagiu na construção do compoenente.');

    return () => {
      console.log('Reagiu na descontrução do compoenente.');
    };
  }, []); //array obtém as etapas do ciclo de via

  useEffect(() => {
    console.log('====================================');
    console.log('Reagiu ao atualizar o componente.');
    console.log('====================================');
  }, [cont]);

  return (
    <View style={styles.container}>
      <Text color="blue">Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{color: 'red'}}>{cont}</Text>
      <MeuButtom aoClicar={incrementar} texto="Incrementar" />
      <MeuButtom aoClicar={decrementar} texto="decrementar" />
      <MeuButtom aoClicar={mudarDeScreen} texto="Ir para SignIns" />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 60,
  },
});
