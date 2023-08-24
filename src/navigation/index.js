import React from 'react';
import {AuthenticationProvider} from '../context/Authentication';
import Navigator from './Navigator';

export default function Providers() {
  return (
    <AuthenticationProvider>
      <Navigator />
    </AuthenticationProvider>
  );
}
