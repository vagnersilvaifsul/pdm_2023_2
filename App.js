import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MeuButtom from './src/componentes/MeuButtom';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [cont, setCont] = useState(0);

  function incrementar() {
    setCont(cont + 1);
  }

  function decrementar() {
    setCont(cont - 1);
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
    <NavigationContainer>
      <View style={styles.container}>
        <Text color="blue">Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{color: 'red'}}>{cont}</Text>
        <MeuButtom aoClicar={incrementar} texto="Incrementar" />
        <MeuButtom aoClicar={decrementar} texto="decrementar" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
  },
});
