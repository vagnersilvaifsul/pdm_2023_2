import React from 'react';
import {AuthenticationProvider} from '../context/Authentication';
import {EstudanteProvider} from '../context/EstudanteProvider';
import Navigator from './Navigator';

export default function Providers() {
  return (
    <AuthenticationProvider>
      <EstudanteProvider>
        <Navigator />
      </EstudanteProvider>
    </AuthenticationProvider>
  );
}
