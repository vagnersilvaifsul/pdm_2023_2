import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AuthenticationContext} from '../../context/Authentication';

const PerfilUsuario = () => {
  const {user} = useContext(AuthenticationContext);

  console.log('==================Perfil do User==================');
  console.log(user);
  console.log('====================================');

  return (
    <View>
      <Text>Perfil do Usuário</Text>
    </View>
  );
};

export default PerfilUsuario;
