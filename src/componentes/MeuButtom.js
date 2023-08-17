import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

function MeuButtom({aoClicar, texto}) {
  //console.log(props);
  return (
    <TouchableHighlight style={styles.buttom} onPress={aoClicar}>
      <Text style={styles.text}>{texto}</Text>
    </TouchableHighlight>
  );
}
export default MeuButtom;

const styles = StyleSheet.create({
  buttom: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
  },
  text: {
    color: '#0f0',
  },
});
